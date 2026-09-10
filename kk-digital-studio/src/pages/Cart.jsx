import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import PageHero from '../components/PageHero.jsx';
import CartItem from '../components/CartItem.jsx';
import CartSummary from '../components/CartSummary.jsx';
import { useCart } from '../context/CartContext.jsx';
import './Cart.css';

export default function Cart() {
  const { items } = useCart();

  return (
    <>
      <PageHero
        eyebrow="Your Cart"
        title={items.length ? 'Almost yours' : 'Your cart is empty'}
        lead={items.length ? 'Review your frames, then send the order enquiry on WhatsApp.' : 'Beautiful frames are waiting for your photographs.'}
      />
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          {items.length === 0 ? (
            <div className="center" style={{ padding: '2rem 0 4rem' }}>
              <Link to="/photo-frames" className="btn btn--gold">Browse Photo Frames</Link>
            </div>
          ) : (
            <div className="cart-layout">
              <div className="cart-layout__items">
                <AnimatePresence initial={false}>
                  {items.map((item) => <CartItem key={item.id} item={item} />)}
                </AnimatePresence>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <CartSummary />
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
