import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { waLink } from '../utils/whatsapp.js';
import { WhatsAppIconLink } from '../utils/nav-icons.jsx';
import './WhatsAppButton.css';

const QUICK = [
  { id: 'booking', label: '📸 Book a Session', msg: 'Hi KK DIGITAL STUDIO, I would like to book a photography session.' },
  { id: 'wedding', label: '💍 Wedding Photography', msg: 'Hi KK DIGITAL STUDIO, I am interested in wedding photography.' },
  { id: 'frames', label: '🖼️ Photo Frames', msg: 'Hi KK DIGITAL STUDIO, I would like to order a custom photo frame.' },
  { id: 'packages', label: '✨ Packages & Pricing', msg: 'Hi KK DIGITAL STUDIO, please share your packages and pricing.' }
];

// Floating WhatsApp launcher + quick-intent menu (site-wide)
export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="wa-float">
      <AnimatePresence>
        {open && (
          <motion.ul
            className="wa-float__menu"
            initial={{ opacity: 0, y: 14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <li className="wa-float__head">
              <strong>KK DIGITAL STUDIO</strong>
              <span>Typically replies instantly</span>
            </li>
            {QUICK.map((q) => (
              <li key={q.id}>
                <a href={waLink(q.msg)} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                  {q.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <button
        type="button"
        className="wa-float__btn"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close WhatsApp quick menu' : 'Open WhatsApp quick menu'}
      >
        {open ? <span className="wa-float__x" aria-hidden="true">✕</span> : <WhatsAppIconLink size={26} />}
      </button>
    </div>
  );
}
