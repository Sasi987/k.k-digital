import { motion } from 'framer-motion';
import './PageHero.css';

export default function PageHero({ eyebrow, title, lead, image }) {
  return (
    <section className="page-hero">
      {image && (
        <div className="page-hero__bg" aria-hidden="true">
          <img src={image} alt="" loading="lazy" />
        </div>
      )}
      <div className="page-hero__scrim" aria-hidden="true" />
      <div className="container page-hero__content">
        <motion.span className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
          {eyebrow}
        </motion.span>
        <motion.h1 className="display-1" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          {title}
        </motion.h1>
        {lead && (
          <motion.p className="lead" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}>
            {lead}
          </motion.p>
        )}
      </div>
    </section>
  );
}
