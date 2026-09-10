import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import BookingForm from '../components/BookingForm.jsx';
import { motion } from 'framer-motion';
import { slideReveal, viewportOnce } from '../utils/motion.js';
import { waLink, STUDIO_PHONE_DISPLAY, STUDIO_PHONE_TEL } from '../utils/whatsapp.js';

export default function Booking() {
  return (
    <>
      <PageHero
        eyebrow="Book a Session"
        title="Let's reserve your date"
        lead="Tell us about your moment — we reply personally within a few hours."
        image="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1920&h=1080&q=80"
      />
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'start' }}>
          <div>
            <SectionHeading eyebrow="Enquiry" title="Booking details" />
            <BookingForm />
          </div>
          <motion.aside
            className="booking-aside"
            variants={slideReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}
          >
            <div className="service-card">
              <h3 className="service-card__title">Prefer to talk?</h3>
              <p className="service-card__desc">
                Call or message us directly — our WhatsApp assistant replies instantly,
                and the studio team follows up personally.
              </p>
              <a href={`tel:${STUDIO_PHONE_TEL}`} className="service-card__link">📞 {STUDIO_PHONE_DISPLAY}</a>
              <a
                href={waLink('Hi KK DIGITAL STUDIO, I would like to book a photography session.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp"
                style={{ marginTop: '0.8rem', alignSelf: 'flex-start' }}
              >
                WhatsApp Booking
              </a>
            </div>
            <div className="service-card">
              <h3 className="service-card__title">What happens next</h3>
              <p className="service-card__desc">
                1. We confirm availability for your date.<br />
                2. A short consultation call to understand your story.<br />
                3. You receive a tailored quote and coverage plan.<br />
                4. Your date is locked with a small advance.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  );
}
