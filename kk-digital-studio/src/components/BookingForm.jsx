import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { waBooking } from '../utils/whatsapp.js';
import './BookingForm.css';

const SERVICE_OPTIONS = [
  'Wedding Photography',
  'Pre-Wedding Shoot',
  'Portrait Session',
  'Event Coverage',
  'Custom Photo Frames',
  'Cinematic Film',
  'Other'
];

const initial = { name: '', phone: '', email: '', service: '', date: '', time: '', message: '' };

export default function BookingForm() {
  const location = useLocation();
  const prefill = location.state?.service || '';
  const [form, setForm] = useState({ ...initial, service: prefill });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: '' }));
  };

  const validate = () => {
    const er = {};
    if (form.name.trim().length < 2) er.name = 'Please enter your name.';
    if (!/^[\d\s+-]{10,15}$/.test(form.phone.trim())) er.phone = 'Enter a valid 10-digit phone number.';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = 'Enter a valid email address.';
    if (!form.service) er.service = 'Please choose a service.';
    if (!form.date) er.date = 'Please pick a date.';
    if (!form.time) er.time = 'Please pick a time.';
    return er;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) return;
    setSending(true);
    try {
      await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
    } catch {
      /* Backend offline in dev — enquiry still proceeds via WhatsApp CTA */
    }
    setSending(false);
    setSubmitted(true);
  };

  const waHref = waBooking({
    service: form.service || 'Photography Session',
    date: form.date || '—',
    time: form.time || '—',
    name: form.name || '—',
    phone: form.phone || '—'
  });

  return (
    <div className="booking">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            className="booking__success"
            role="status"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
          >
            <span className="booking__check" aria-hidden="true">✓</span>
            <h3 className="display-3">Thank you, {form.name.split(' ')[0]}.</h3>
            <p className="lead">
              Your enquiry for <strong className="gold">{form.service}</strong> on{' '}
              <strong className="gold">{form.date}</strong> has been received. Our team will reach out shortly.
            </p>
            <p>Want an instant confirmation? Continue on WhatsApp:</p>
            <div className="booking__success-cta">
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
                Confirm on WhatsApp
              </a>
              <button
                type="button"
                className="btn btn--outline"
                onClick={() => { setSubmitted(false); setForm(initial); }}
              >
                New Enquiry
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            className="booking__form"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="booking__grid">
              <Field label="Your Name" error={errors.name}>
                <input type="text" value={form.name} onChange={set('name')} autoComplete="name" aria-required="true" />
              </Field>
              <Field label="Phone" error={errors.phone}>
                <input type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" placeholder="70924 21902" aria-required="true" />
              </Field>
              <Field label="Email (optional)" error={errors.email}>
                <input type="email" value={form.email} onChange={set('email')} autoComplete="email" />
              </Field>
              <Field label="Service" error={errors.service}>
                <select value={form.service} onChange={set('service')} aria-required="true">
                  <option value="">Select a service…</option>
                  {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="Preferred Date" error={errors.date}>
                <input type="date" value={form.date} onChange={set('date')} aria-required="true" />
              </Field>
              <Field label="Preferred Time" error={errors.time}>
                <input type="time" value={form.time} onChange={set('time')} aria-required="true" />
              </Field>
            </div>
            <Field label="Tell us about your moment" error={errors.message}>
              <textarea value={form.message} onChange={set('message')} placeholder="Venue, number of guests, style you love…" />
            </Field>
            <button type="submit" className="btn btn--gold booking__submit" disabled={sending}>
              {sending ? 'Sending…' : 'Send Booking Enquiry'}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label>{label}</label>
      {children}
      <span className="error-text" role={error ? 'alert' : undefined}>{error}</span>
    </div>
  );
}
