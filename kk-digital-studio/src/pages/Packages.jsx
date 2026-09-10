import { motion } from 'framer-motion';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import PackageCard from '../components/PackageCard.jsx';
import { PACKAGES } from '../data/packages.js';
import { stagger, viewportOnce } from '../utils/motion.js';
import { waLink } from '../utils/whatsapp.js';

export default function Packages() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Collections for every celebration"
        lead="Transparent pricing, no surprises — and every package can be tailored to your day."
        image="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&h=1080&q=80"
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Invest in Memory"
            title="Choose your experience"
            lead="Not sure which fits? Message us on WhatsApp and we'll guide you in minutes."
          />
          <motion.div
            className="packages-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {PACKAGES.map((p) => <PackageCard key={p.id} pkg={p} />)}
          </motion.div>
          <div className="center" style={{ marginTop: '2.6rem' }}>
            <a
              className="btn btn--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              href={waLink('Hi KK DIGITAL STUDIO, please share your packages and pricing.')}
            >
              Ask About Custom Packages
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
