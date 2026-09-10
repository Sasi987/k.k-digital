import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import FrameCard from '../components/FrameCard.jsx';
import PortfolioFilter from '../components/PortfolioFilter.jsx';
import { FRAMES, FRAME_CATEGORIES } from '../data/frames.js';
import { stagger, viewportOnce } from '../utils/motion.js';

export default function PhotoFrames() {
  const [cat, setCat] = useState('all');
  const frames = useMemo(
    () => (cat === 'all' ? FRAMES : FRAMES.filter((f) => f.category === cat)),
    [cat]
  );

  return (
    <>
      <PageHero
        eyebrow="The Frame Store"
        title="Frames worthy of your photographs"
        lead="Handcrafted wooden, gold, acrylic, canvas, and metal frames — customized with your photo and delivered to your door."
        image="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1920&h=1080&q=80"
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Shop"
            title="Choose your frame"
            lead="Upload your photo on any product page to see a live preview before you order."
          />
          <PortfolioFilter categories={FRAME_CATEGORIES} active={cat} onChange={setCat} />
          <motion.div
            className="frames-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {frames.map((f) => <FrameCard key={f.id} frame={f} />)}
          </motion.div>
        </div>
      </section>
    </>
  );
}
