import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { handleIncomingMessage, sendWhatsAppMessage } from './whatsapp.js';

const app = express();
const PORT = process.env.PORT || 4000;
const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN;

app.use(cors());
app.use(express.json());

// In-memory dedup store (swap for Redis/DB in production)
const processedMessageIds = new Set();
const MAX_CACHE = 5000;

function alreadyProcessed(id) {
  if (!id) return false;
  if (processedMessageIds.has(id)) return true;
  if (processedMessageIds.size >= MAX_CACHE) {
    const first = processedMessageIds.values().next().value;
    processedMessageIds.delete(first);
  }
  processedMessageIds.add(id);
  return false;
}

// --- Webhook verification (Meta calls this once when you register the webhook)
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('[webhook] verified');
    return res.status(200).send(challenge);
  }
  return res.sendStatus(403);
});

// --- Incoming WhatsApp messages
app.post('/webhook', async (req, res) => {
  // Always ACK fast so Meta does not retry
  res.sendStatus(200);
  try {
    const entry = req.body?.entry?.[0];
    const change = entry?.changes?.[0];
    const value = change?.value;
    const message = value?.messages?.[0];
    if (!message || message.type !== 'text') return;
    if (alreadyProcessed(message.id)) {
      console.log('[webhook] duplicate ignored:', message.id);
      return;
    }
    const from = message.from;
    const text = message.text?.body || '';
    console.log(`[webhook] message from ${from}: "${text.slice(0, 80)}"`);
    await handleIncomingMessage(from, text);
  } catch (err) {
    console.error('[webhook] error:', err.message);
  }
});

// --- Booking notification from the website booking form
app.post('/api/booking', async (req, res) => {
  const { name, phone, email, service, date, time, message } = req.body || {};
  if (!name || !phone || !service) {
    return res.status(400).json({ ok: false, error: 'name, phone and service are required' });
  }
  const studioNumber = process.env.STUDIO_WHATSAPP_NUMBER;
  const body = [
    '📸 New Booking Enquiry — Website',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email || '-'}`,
    `Service: ${service}`,
    `Date: ${date || '-'}`,
    `Time: ${time || '-'}`,
    `Message: ${message || '-'}`
  ].join('\n');
  try {
    if (studioNumber) await sendWhatsAppMessage(studioNumber, body);
    console.log('[booking] enquiry received for', name);
    res.json({ ok: true });
  } catch (err) {
    console.error('[booking] whatsapp notify failed:', err.message);
    // Still accept the enquiry even if WhatsApp notify fails
    res.json({ ok: true, whatsappNotified: false });
  }
});

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'kk-digital-studio' }));

app.listen(PORT, () => console.log(`KK DIGITAL STUDIO server on :${PORT}`));
