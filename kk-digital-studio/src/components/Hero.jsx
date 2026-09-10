import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { waGeneral } from '../utils/whatsapp.js';
import { WhatsAppIconLink } from '../utils/nav-icons.jsx';
import { STUDIO_PHONE_TEL } from '../utils/whatsapp.js';
import './Hero.css';

const HERO_IMG =
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&h=1080&q=80';

export default function Hero() {
  return (
    <section className="hero" aria-label="Welcome to KK Digital Studio">
      <motion.div
        className="hero__bg"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={HERO_IMG} alt="Bride and groom in a cinematic wedding portrait" fetchPriority="high" />
      </motion.div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__content container">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          KK Digital Studio
        </motion.span>
        <motion.h1
          className="hero__title display-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          We Capture <em>Your</em> Moments.
        </motion.h1>
        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
        >
          Photography that turns real moments into timeless memories.
        </motion.p>
        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7 }}
        >
          <Link to="/booking" className="btn btn--gold">Book Your Session</Link>
          <Link to="/portfolio" className="btn btn--outline">View Portfolio</Link>
          <a href={waGeneral()} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
            <WhatsAppIconLink size={15} /> WhatsApp Us
          </a>
          <a href={`tel:${STUDIO_PHONE_TEL}`} className="btn btn--ghost">📞 Call Now</a>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        aria-hidden="true"
      >
        <span>Scroll</span>
        <i />
      </motion.div>
    </section>
  );
}
