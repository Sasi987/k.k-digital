import { NavLink } from 'react-router-dom';
import { waGeneral, WhatsAppIconLink } from '../utils/nav-icons.jsx';
import { useCart } from '../context/CartContext.jsx';
import './MobileBottomBar.css';

export default function MobileBottomBar() {
  const { count } = useCart();
  return (
    <nav className="bottom-bar" aria-label="Quick actions">
      <NavLink to="/" end className="bottom-bar__item">
        <Icon d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z" />
        <span>Home</span>
      </NavLink>
      <NavLink to="/photo-frames" className="bottom-bar__item">
        <Icon d="M4 5h16v14H4z M4 15l4-4 4 4 3-3 5 5" />
        <span>Frames</span>
      </NavLink>
      <a href={waGeneral()} target="_blank" rel="noopener noreferrer" className="bottom-bar__item bottom-bar__item--wa" aria-label="WhatsApp us">
        <WhatsAppIconLink />
        <span>WhatsApp</span>
      </a>
      <NavLink to="/cart" className="bottom-bar__item">
        <span className="bottom-bar__cartwrap">
          <Icon d="M6 7h12l1 13H5L6 7z M9 7a3 3 0 0 1 6 0" />
          {count > 0 && <i className="bottom-bar__badge">{count}</i>}
        </span>
        <span>Cart</span>
      </NavLink>
      <NavLink to="/booking" className="bottom-bar__item bottom-bar__item--book">
        <Icon d="M8 2v3 M16 2v3 M3 9h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
        <span>Book</span>
      </NavLink>
    </nav>
  );
}

function Icon({ d }) {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
      {d.split(' M').map((p, i) => (
        <path key={i} d={(i ? 'M' : '') + p} />
      ))}
    </svg>
  );
}
