import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import PortfolioGrid from '../components/PortfolioGrid.jsx';
import { PORTFOLIO_ITEMS } from '../data/gallery.js';
import { waLink } from '../utils/whatsapp.js';

export default function Portrait() {
  const portraitItems = useMemo(
    () => PORTFOLIO_ITEMS.filter((i) => i.category === 'portrait'),
    []
  );

  return (
    <>
      <PageHero
        eyebrow="Portrait Sessions"
        title="The art of being seen"
        lead="Editorial studio and outdoor portraits — individual, family, maternity, and newborn."
        image="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1920&h=1080&q=80"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="The Session"
            title="Slow, guided, and entirely yours"
            lead="Every session begins with a styling consultation. We direct gently, shoot patiently, and deliver a curated gallery you'll actually love."
          />
          <PortfolioGrid items={portraitItems} />
          <div className="center" style={{ marginTop: '2.6rem', display: 'flex', gap: '0.9rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/booking" state={{ service: 'Portrait Session' }} className="btn btn--gold">Book a Portrait Session</Link>
            <a
              className="btn btn--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              href={waLink('Hi KK DIGITAL STUDIO, I would like a portrait session.')}
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
