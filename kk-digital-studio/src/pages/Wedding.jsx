import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import PortfolioGrid from '../components/PortfolioGrid.jsx';
import { PORTFOLIO_ITEMS } from '../data/gallery.js';
import { fadeUp, stagger, viewportOnce } from '../utils/motion.js';
import { waLink } from '../utils/whatsapp.js';

const STEPS = [
  { n: '01', title: 'The Conversation', desc: 'We meet — over coffee or a call — to understand your story, rituals, and the people who matter most.' },
  { n: '02', title: 'The Plan', desc: 'A tailored coverage plan: timelines, light, locations, and a shot list built around your family.' },
  { n: '03', title: 'The Day', desc: 'We arrive early, stay late, and move quietly. You celebrate; we disappear into it.' },
  { n: '04', title: 'The Heirloom', desc: 'A curated gallery, a cinematic film, and handcrafted albums — delivered with care.' }
];

export default function Wedding() {
  const weddingItems = useMemo(
    () => PORTFOLIO_ITEMS.filter((i) => i.category === 'wedding' || i.category === 'prewedding'),
    []
  );

  return (
    <>
      <PageHero
        eyebrow="Wedding Photography"
        title="Your once-in-a-lifetime, photographed like cinema"
        lead="Full-day storytelling for weddings and pre-wedding celebrations — unobtrusive, emotional, timeless."
        image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&h=1080&q=80"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="How It Works"
            title="From first hello to heirloom"
            lead="A calm, considered process refined over 850+ weddings."
          />
          <motion.ol
            className="steps-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {STEPS.map((s) => (
              <motion.li key={s.n} className="service-card" variants={fadeUp}>
                <span className="gold" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem' }}>{s.n}</span>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeading eyebrow="Wedding Stories" title="Recent celebrations" />
          <PortfolioGrid items={weddingItems} />
          <div className="center" style={{ marginTop: '2.6rem', display: 'flex', gap: '0.9rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/booking" state={{ service: 'Wedding Photography' }} className="btn btn--gold">Book Your Wedding</Link>
            <a
              className="btn btn--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              href={waLink('Hi KK DIGITAL STUDIO, I am interested in wedding photography.')}
            >
              WhatsApp the Studio
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
