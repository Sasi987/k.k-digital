import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { formatINR } from '../data/frames.js';
import { fadeUp } from '../utils/motion.js';
import './PackageCard.css';

export default function PackageCard({ pkg }) {
  return (
    <motion.article className={`package-card ${pkg.featured ? 'package-card--featured' : ''}`} variants={fadeUp}>
      {pkg.featured && <span className="package-card__flag">Most Loved</span>}
      <h3 className="package-card__name">{pkg.name}</h3>
      <p className="package-card__tagline">{pkg.tagline}</p>
      <p className="package-card__price">
        <span className="package-card__from">from</span> {formatINR(pkg.price)}
      </p>
      <ul className="package-card__list">
        {pkg.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <Link to="/booking" state={{ service: `Package — ${pkg.name}` }} className={`btn ${pkg.featured ? 'btn--gold' : 'btn--outline'}`}>
        Reserve {pkg.name}
      </Link>
    </motion.article>
  );
}
