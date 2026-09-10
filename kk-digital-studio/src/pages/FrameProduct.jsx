import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import FrameCustomizer from '../components/FrameCustomizer.jsx';
import FrameCard from '../components/FrameCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { FRAMES, formatINR } from '../data/frames.js';
import { stagger, viewportOnce } from '../utils/motion.js';
import './FrameProduct.css';

export default function FrameProduct() {
  const { id } = useParams();
  const frame = FRAMES.find((f) => f.id === id);
  const [activeImg, setActiveImg] = useState(0);

  if (!frame) {
    return (
      <section className="section" style={{ paddingTop: 'calc(var(--navbar-h) + 4rem)' }}>
        <div className="container center">
          <h1 className="display-2">Frame not found</h1>
          <p className="lead" style={{ margin: '1rem auto 2rem' }}>This frame may have been retired from our collection.</p>
          <Link to="/photo-frames" className="btn btn--gold">Browse All Frames</Link>
        </div>
      </section>
    );
  }

  const related = FRAMES.filter((f) => f.id !== frame.id && f.category === frame.category).slice(0, 3);
  const relatedList = related.length ? related : FRAMES.filter((f) => f.id !== frame.id).slice(0, 3);

  return (
    <>
      <section className="section frame-product" style={{ paddingTop: 'calc(var(--navbar-h) + 2.5rem)' }}>
        <div className="container">
          <nav className="frame-product__crumbs" aria-label="Breadcrumb">
            <Link to="/photo-frames">Photo Frames</Link>
            <span aria-hidden="true">/</span>
            <span>{frame.name}</span>
          </nav>

          <div className="frame-product__head">
            <div>
              <span className="eyebrow">{frame.category} frame</span>
              <h1 className="display-2" style={{ marginTop: '0.8rem' }}>{frame.name}</h1>
              <p className="lead" style={{ marginTop: '1rem' }}>{frame.description}</p>
              <p className="frame-product__from">from {formatINR(frame.basePrice)}</p>
            </div>
            {/* Gallery thumbnails */}
            <div className="frame-product__thumbs" role="tablist" aria-label="Product images">
              {frame.images.map((src, i) => (
                <button
                  key={src}
                  role="tab"
                  aria-selected={activeImg === i}
                  className={`frame-product__thumb ${activeImg === i ? 'is-active' : ''}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={src} alt={`${frame.name} — view ${i + 1}`} loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeImg}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="frame-product__heroimg"
            >
              <img src={frame.images[activeImg]} alt={`${frame.name} — large view`} loading="lazy" />
            </motion.div>
          </AnimatePresence>

          <h2 className="display-3" style={{ margin: '3rem 0 1.5rem' }}>Customize & Order</h2>
          <FrameCustomizer frame={frame} />
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeading eyebrow="You May Also Love" title="More from the workshop" />
          <motion.div
            className="frames-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {relatedList.map((f) => <FrameCard key={f.id} frame={f} />)}
          </motion.div>
        </div>
      </section>
    </>
  );
}
