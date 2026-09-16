import { Link } from 'react-router-dom';
import { waGeneral, STUDIO_PHONE_DISPLAY, STUDIO_PHONE_TEL } from '../utils/whatsapp.js';
import { WhatsAppIconLink } from '../utils/nav-icons.jsx';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="navbar__logo" aria-label="KK Digital Studio — Home">
            <span className="navbar__logo-mark">KK</span>
            <span className="navbar__logo-text">DIGITAL <em>STUDIO</em></span>
          </Link>
          <p>
            A luxury photography studio crafting cinematic weddings, editorial portraits,
            and museum-grade photo frames. We capture your moments — beautifully.
          </p>
        </div>

        <nav className="footer__col" aria-label="Explore">
          <h3>Explore</h3>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
        </nav>

        <nav className="footer__col" aria-label="Studio">
          <h3>Studio</h3>
          <Link to="/packages">Packages</Link>
          <Link to="/photo-frames">Photo Frames</Link>
          <Link to="/booking">Book a Session</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer__col">
          <h3>Talk to Us</h3>
          <a href={`tel:${STUDIO_PHONE_TEL}`}>📞 {STUDIO_PHONE_DISPLAY}</a>
          <a href={waGeneral()} target="_blank" rel="noopener noreferrer" className="footer__wa">
            <WhatsAppIconLink size={15} /> WhatsApp — instant reply
          </a>
          <p className="footer__hours">Open daily · 9:00 – 21:00</p>
        </div>
      </div>
      <div className="container footer__bar">
        <span>© {new Date().getFullYear()} KK DIGITAL STUDIO. All moments reserved.</span>
        <span>Crafted with light.</span>
      </div>
    </footer>
  );
}
