import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { formatINR } from '../data/frames.js';
import { fadeUp } from '../utils/motion.js';
import './FrameCard.css';

export default function FrameCard({ frame }) {
  return (
    <motion.article className="frame-card" variants={fadeUp} layout>
      <Link to={`/photo-frames/${frame.id}`} className="frame-card__media" aria-label={`View ${frame.name}`}>
        <img src={frame.images[0]} alt={frame.name} loading="lazy" decoding="async" />
        <span className="frame-card__hover-img" aria-hidden="true">
          <img src={frame.images[1]} alt="" loading="lazy" decoding="async" />
        </span>
      </Link>
      <div className="frame-card__body">
        <h3 className="frame-card__name">
          <Link to={`/photo-frames/${frame.id}`}>{frame.name}</Link>
        </h3>
        <p className="frame-card__price">
          <span>from</span> {formatINR(frame.basePrice)}
        </p>
      </div>
    </motion.article>
  );
}
