import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lightbox from './Lightbox.jsx';
import './PortfolioGrid.css';

export default function PortfolioGrid({ items }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <>
      <motion.div className="portfolio-grid" layout>
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              className={`portfolio-card ${item.tall ? 'portfolio-card--tall' : ''}`}
              onClick={() => setLightboxIndex(i)}
              aria-label={`View ${item.title} fullscreen`}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
              <span className="portfolio-card__veil" aria-hidden="true">
                <em>{item.title}</em>
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <Lightbox items={items} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onNavigate={setLightboxIndex} />
    </>
  );
}
