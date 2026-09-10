import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard.jsx';
import { stagger, viewportOnce } from '../utils/motion.js';

export default function ServicesGrid({ services }) {
  return (
    <motion.div
      className="services-grid"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {services.map((s) => (
        <ServiceCard key={s.id} service={s} />
      ))}
    </motion.div>
  );
}
