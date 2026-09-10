// WhatsApp Cloud API helpers + automatic reply engine.
// Secrets come from environment variables only — never hardcode tokens here.

const TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
const API_VERSION = process.env.GRAPH_API_VERSION || 'v21.0';

export const REPLIES = {
  greeting: `Hello 👋 Welcome to KK DIGITAL STUDIO.

How can we help you today?

1️⃣ Photography Booking
2️⃣ Wedding Photography
3️⃣ Portrait Session
4️⃣ Photo Frames
5️⃣ Packages
6️⃣ Contact Studio

Please reply with the option number.`,

  booking: `📸 Photography Booking

We would love to capture your special moments.

Please share:
• Your Name
• Event Type
• Preferred Date
• Preferred Time
• Location

Our team will contact you shortly.`,

  wedding: `💍 Wedding Photography

Thank you for choosing KK DIGITAL STUDIO.

Please share:
• Bride & Groom Name
• Wedding Date
• Venue
• Photography Requirement

We will help you choose the right package.`,

  portrait: `📷 Portrait Session

Please share:
• Your Name
• Portrait Type
• Preferred Date
• Preferred Time

We will confirm the available options with you.`,

  frames: `🖼️ Custom Photo Frames

We offer premium customized photo frames.

Please send:
• Photo
• Frame Size
• Frame Style
• Quantity

Our team will provide the details and pricing.`,

  packages: `✨ KK DIGITAL STUDIO Packages

Our photography packages are designed for different events and requirements.

Please tell us:
1️⃣ Wedding
2️⃣ Portrait
3️⃣ Event
4️⃣ Pre-Wedding
5️⃣ Custom Package`,

  human: `👋 Thank you for contacting KK DIGITAL STUDIO.

Our team will review your request and get back to you shortly.

📞 097888 89966`
};

// Simple intent engine: number shortcuts first, then keyword matching
export function detectIntent(raw) {
  const text = (raw || '').trim().toLowerCase();
  if (!text) return 'greeting';

  if (/^(hi+|hello+|hai+|hey+|good\s?(morning|afternoon|evening)|namaste|vanakkam)\b/.test(text)) return 'greeting';
  if (text === '1' || /book(ing)?|appointment|session\b|reserve/.test(text)) return 'booking';
  if (text === '2' || /wedd?ing|marriage|bride|groom|reception/.test(text)) return 'wedding';
  if (text === '3' || /portrait|headshot|family shoot|baby shoot|maternity/.test(text)) return 'portrait';
  if (text === '4' || /frame|photo frame|lamination|canvas print/.test(text)) return 'frames';
  if (text === '5' || /package|pricing|price|rate|cost|quote/.test(text)) return 'packages';
  if (text === '6' || /contact|human|agent|call me|support|help|talk/.test(text)) return 'human';

  return 'greeting'; // unknown messages get the menu
}

export async function sendWhatsAppMessage(to, body) {
  if (!TOKEN || !PHONE_NUMBER_ID) {
    console.log('[whatsapp] (dry-run, missing credentials) →', to, '\n' + body);
    return { dryRun: true };
  }
  const res = await fetch(`https://graph.facebook.com/${API_VERSION}/${PHONE_NUMBER_ID}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to,
      type: 'text',
      text: { preview_url: false, body }
    })
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error('[whatsapp] send failed:', res.status, JSON.stringify(data));
    throw new Error(`WhatsApp API error ${res.status}`);
  }
  console.log('[whatsapp] sent to', to);
  return data;
}

export async function handleIncomingMessage(from, text) {
  const intent = detectIntent(text);
  console.log(`[intent] ${intent}`);
  await sendWhatsAppMessage(from, REPLIES[intent]);
}
