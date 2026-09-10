import { useCart } from '../context/CartContext.jsx';
import { waCart } from '../utils/whatsapp.js';
import { formatINR } from '../data/frames.js';
import './CartSummary.css';

export default function CartSummary() {
  const { items, total, totalLabel, clearCart } = useCart();

  const waItems = items.map((i) => ({
    name: i.name,
    sizeLabel: i.sizeLabel,
    materialLabel: i.materialLabel,
    colorLabel: i.colorLabel,
    qty: i.qty,
    lineTotal: formatINR(i.unitPrice * i.qty)
  }));

  return (
    <aside className="cart-summary" aria-label="Order summary">
      <h2 className="cart-summary__title">Order Summary</h2>
      <dl className="cart-summary__rows">
        <div>
          <dt>Items</dt>
          <dd>{items.reduce((s, i) => s + i.qty, 0)}</dd>
        </div>
        <div>
          <dt>Subtotal</dt>
          <dd>{totalLabel}</dd>
        </div>
        <div>
          <dt>Printing & Delivery</dt>
          <dd>Confirmed on enquiry</dd>
        </div>
        <div className="cart-summary__total">
          <dt>Total</dt>
          <dd>{totalLabel}</dd>
        </div>
      </dl>
      <a
        href={waCart(waItems, totalLabel)}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn btn--whatsapp ${total === 0 ? 'is-disabled' : ''}`}
        aria-disabled={total === 0}
        onClick={(e) => total === 0 && e.preventDefault()}
      >
        Place Order via WhatsApp
      </a>
      <button type="button" className="btn btn--ghost" onClick={clearCart} disabled={total === 0}>
        Clear Cart
      </button>
      <p className="cart-summary__note">
        Your cart is saved on this device. Send the enquiry and our team will confirm pricing, printing, and delivery.
      </p>
    </aside>
  );
}
