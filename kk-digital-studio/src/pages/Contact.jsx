import PageHero from '../components/PageHero.jsx';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../utils/motion.js';
import { waGeneral, STUDIO_PHONE_DISPLAY, STUDIO_PHONE_TEL } from '../utils/whatsapp.js';

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Say hello"
        lead="Call, message, or simply say 'Hi' on WhatsApp — our assistant will guide you instantly."
        image="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=1920&h=1080&q=80"
      />

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <motion.span className="eyebrow" variants={fadeUp}>Reach Us</motion.span>
              <motion.h2 className="display-2" variants={fadeUp} style={{ marginTop: '1rem' }}>
                We are one message away.
              </motion.h2>
              <motion.div variants={fadeUp} style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href={`tel:${STUDIO_PHONE_TEL}`} className="service-card" style={{ textDecoration: 'none' }}>
                  <h3 className="service-card__title">📞 Call the Studio</h3>
                  <p className="service-card__desc">{STUDIO_PHONE_DISPLAY} — open daily, 9:00 to 21:00.</p>
                </a>
                <a href={waGeneral()} target="_blank" rel="noopener noreferrer" className="service-card" style={{ textDecoration: 'none' }}>
                  <h3 className="service-card__title">💬 WhatsApp — Instant Reply</h3>
                  <p className="service-card__desc">
                    Send "Hi" and our assistant will show you booking, wedding, portrait,
                    frame, and package options immediately.
                  </p>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
