import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUp } from '../utils/motion.js';
import './ServiceCard.css';

export default function ServiceCard({ service }) {
  return (
    <motion.article className="service-card" variants={fadeUp}>
      <span className="service-card__icon" aria-hidden="true">{service.icon}</span>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">{service.desc}</p>
      <Link to="/booking" state={{ service: service.title }} className="service-card__link">
        Enquire →
      </Link>
    </motion.article>
  );
}
