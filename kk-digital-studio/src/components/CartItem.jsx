import { motion } from 'framer-motion';
import { formatINR } from '../data/frames.js';
import { useCart } from '../context/CartContext.jsx';
import './CartItem.css';

export default function CartItem({ item }) {
  const { updateQty, removeItem } = useCart();

  return (
    <motion.article
      className="cart-item"
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35 }}
    >
      <img className="cart-item__img" src={item.photoPreview || item.image} alt={item.name} />
      <div className="cart-item__info">
        <h3>{item.name}</h3>
        <p className="cart-item__meta">
          {item.sizeLabel} · {item.materialLabel} · {item.colorLabel}
          {item.photoName && <span className="cart-item__photo"> · 📎 {item.photoName}</span>}
        </p>
        <p className="cart-item__unit">{formatINR(item.unitPrice)} each</p>
      </div>
      <div className="cart-item__controls">
        <div className="qty qty--sm" role="group" aria-label={`Quantity of ${item.name}`}>
          <button type="button" onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease quantity">−</button>
          <output aria-live="polite">{item.qty}</output>
          <button type="button" onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase quantity">+</button>
        </div>
        <strong className="cart-item__total">{formatINR(item.unitPrice * item.qty)}</strong>
        <button type="button" className="cart-item__remove" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name} from cart`}>
          Remove
        </button>
      </div>
    </motion.article>
  );
}
