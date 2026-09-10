import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../utils/motion.js';

export default function SectionHeading({ eyebrow, title, lead, center = false }) {
  return (
    <motion.div
      className={`section-heading ${center ? 'center' : ''}`}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)', maxWidth: center ? '720px' : undefined, marginInline: center ? 'auto' : undefined }}
    >
      {eyebrow && <motion.span className="eyebrow" variants={fadeUp}>{eyebrow}</motion.span>}
      <motion.h2 className="display-2" variants={fadeUp} style={{ marginTop: '1rem' }}>
        {title}
      </motion.h2>
      {lead && <motion.p className="lead" variants={fadeUp} style={{ marginTop: '1.2rem' }}>{lead}</motion.p>}
    </motion.div>
  );
}
