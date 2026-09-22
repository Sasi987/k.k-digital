import { motion } from 'framer-motion';
import { formatINR } from '../../data/frames.js';
import './CustomizedProductCard.css';

const fallbackSvg = (label) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#f7f1e8"/>
          <stop offset="100%" stop-color="#e5dcc7"/>
        </linearGradient>
      </defs>
      <rect width="800" height="800" fill="url(#bg)"/>
      <rect x="120" y="120" width="560" height="560" rx="46" fill="rgba(13,33,56,0.06)" stroke="rgba(13,33,56,0.12)"/>
      <circle cx="400" cy="330" r="120" fill="rgba(200,169,106,0.28)"/>
      <rect x="270" y="260" width="260" height="170" rx="22" fill="rgba(255,255,255,0.22)"/>
      <text x="400" y="520" text-anchor="middle" font-size="38" font-family="Arial, sans-serif" fill="#0d2138" letter-spacing="7">${label}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export default function CustomizedProductCard({ product, onCustomize, onQuickView }) {
  const handleImageError = (event) => {
    event.currentTarget.src = fallbackSvg(product.name);
  };

  return (
    <motion.article
      className="custom-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
    >
      <div className="custom-card__media">
        <img
          src={product.image}
          alt={`${product.name} personalized gift`}
          loading="lazy"
          onError={handleImageError}
        />
        <span className="custom-card__badge">{product.badge}</span>
      </div>

      <div className="custom-card__content">
        <div className="custom-card__meta">
          <span>{product.category}</span>
          <strong>{formatINR(product.price)}</strong>
        </div>

        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="custom-card__customizable">
          {product.customizable.map((item) => (
            <span key={`${product.id}-${item}`}>{item}</span>
          ))}
        </div>
      </div>

      <div className="custom-card__actions">
        <button type="button" className="btn btn--outline custom-card__view" onClick={() => onQuickView(product)}>
          View Product
        </button>
        <button type="button" className="btn btn--gold custom-card__customize" onClick={() => onCustomize(product)}>
          Customize
        </button>
      </div>
    </motion.article>
  );
}
