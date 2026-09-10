import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';
import PortfolioGrid from '../components/PortfolioGrid.jsx';
import PackageCard from '../components/PackageCard.jsx';
import { SERVICES, PACKAGES } from '../data/packages.js';
import { PORTFOLIO_ITEMS } from '../data/gallery.js';
import { fadeUp, scaleReveal, stagger, viewportOnce } from '../utils/motion.js';
import './Home.css';

const STATS = [
  { n: '850+', label: 'Weddings Captured' },
  { n: '12', label: 'Years Behind the Lens' },
  { n: '40k+', label: 'Frames Delivered' },
  { n: '5.0', label: 'Client Rating' }
];

const img = (id, w = 800, h = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export default function Home() {
  return (
    <>
      <Hero />

      {/* Intro / feel */}
      <section className="section">
        <div className="container grid-2">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.span className="eyebrow" variants={fadeUp}>The Studio</motion.span>
            <motion.h2 className="display-2" variants={fadeUp} style={{ marginTop: '1rem' }}>
              Every glance, every tear, every laugh — <em className="gold">preserved forever.</em>
            </motion.h2>
            <motion.p className="lead" variants={fadeUp} style={{ marginTop: '1.4rem' }}>
              KK DIGITAL STUDIO is a collective of photographers and filmmakers who believe
              a photograph is not taken — it is felt. From grand weddings to quiet portraits,
              we craft images with the patience of editorials and the soul of cinema.
            </motion.p>
            <motion.div variants={fadeUp} style={{ marginTop: '2rem' }}>
              <Link to="/about" className="btn btn--outline">Our Story</Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="home-intro__media"
            variants={scaleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <img src={img('photo-1519225421980-715cb0215aed')} alt="Elegant wedding table setting photographed editorially" loading="lazy" />
            <img src={img('photo-1531746020798-e6953c6e8e04', 600, 750)} alt="Dramatic studio portrait" loading="lazy" className="home-intro__media-float" />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section--dark home-stats">
        <div className="container home-stats__grid">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="home-stats__item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <strong>{s.n}</strong>
              <span>{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What We Do"
            title="Services crafted around your story"
            lead="Weddings, portraits, events, films, and handcrafted frames — one studio for every memory."
          />
          <ServicesGrid services={SERVICES} />
        </div>
      </section>

      {/* Featured work */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Selected Work"
            title="Moments we are proud of"
            lead="A glimpse of recent weddings, portraits, and celebrations."
          />
          <PortfolioGrid items={PORTFOLIO_ITEMS.slice(0, 8)} />
          <div className="center" style={{ marginTop: '2.6rem' }}>
            <Link to="/portfolio" className="btn btn--outline">View Full Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Packages teaser */}
      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Packages"
            title="Choose your experience"
            lead="Transparent, thoughtfully designed collections for every celebration."
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="section home-cta">
        <div className="container center">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.h2 className="display-2" variants={fadeUp}>
              Your moment deserves <em className="gold">more than a snapshot.</em>
            </motion.h2>
            <motion.div variants={fadeUp} className="home-cta__btns">
              <Link to="/booking" className="btn btn--gold">Book Your Session</Link>
              <Link to="/photo-frames" className="btn btn--outline">Shop Photo Frames</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
