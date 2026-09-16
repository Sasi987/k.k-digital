import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "../context/CartContext.jsx";
import { waGeneral } from "../utils/whatsapp.js";
import "./Navbar.css";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/packages", label: "Packages" },
  { to: "/photo-frames", label: "Photo Frames" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { count } = useCart();
  const location = useLocation();

  /* ================================
     NAVBAR SCROLL
  ================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ================================
     CLOSE MENU ON ROUTE CHANGE
  ================================= */

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* ================================
     MOBILE BODY SCROLL LOCK
  ================================= */

  useEffect(() => {
    if (open) {
      document.body.classList.add("navbar-menu-open");
    } else {
      document.body.classList.remove("navbar-menu-open");
    }

    return () => {
      document.body.classList.remove("navbar-menu-open");
    };
  }, [open]);

  /* ================================
     ESCAPE KEY
  ================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className={`navbar ${
        scrolled || open ? "navbar--solid" : ""
      }`}
    >
      <div className="navbar__inner">

        {/* =================================
            LOGO
        ================================= */}

        <Link
          to="/"
          className="navbar__logo"
          aria-label="KK Digital Studio Home"
          onClick={closeMenu}
        >
          <img
            className="navbar__logo-image"
            src="/logo.png"
            alt="KK Digital Studio"
          />
        </Link>

        {/* =================================
            DESKTOP NAVIGATION
        ================================= */}

        <nav
          className="navbar__nav"
          aria-label="Primary navigation"
        >
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `navbar__link ${
                  isActive
                    ? "navbar__link--active"
                    : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* =================================
            ACTIONS
        ================================= */}

        <div className="navbar__actions">

          {/* CART */}

          <Link
            to="/cart"
            className="navbar__cart"
            aria-label={`Cart, ${count} items`}
          >
            <CartIcon />

            {count > 0 && (
              <span className="navbar__cart-badge">
                {count > 99 ? "99+" : count}
              </span>
            )}
          </Link>

          {/* WHATSAPP - DESKTOP ONLY */}

          <a
            href={waGeneral()}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__wa"
            aria-label="Chat with us on WhatsApp"
          >
            <WhatsAppIcon size={17} />
            <span>WhatsApp</span>
          </a>

          {/* BOOK NOW - DESKTOP ONLY */}

          <Link
            to="/booking"
            className="navbar__book"
          >
            Book Now
          </Link>

          {/* MOBILE MENU */}

          <button
            type="button"
            className={`navbar__burger ${
              open ? "navbar__burger--open" : ""
            }`}
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={
              open ? "Close menu" : "Open menu"
            }
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* =================================
          MOBILE MENU
      ================================= */}

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -12,
            }}
            transition={{
              duration: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mobile-menu__inner">

              <div className="mobile-menu__eyebrow">
                KK DIGITAL STUDIO
              </div>

              <ul className="mobile-menu__list">
                {LINKS.map((link, index) => (
                  <motion.li
                    key={link.to}
                    initial={{
                      opacity: 0,
                      x: -18,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                      duration: 0.32,
                    }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `mobile-menu__link ${
                          isActive
                            ? "mobile-menu__link--active"
                            : ""
                        }`
                      }
                    >
                      <span className="mobile-menu__number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="mobile-menu__label">
                        {link.label}
                      </span>

                      <span className="mobile-menu__arrow">
                        →
                      </span>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              {/* MOBILE CTA */}

              <div className="mobile-menu__footer">

                <a
                  href={waGeneral()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-menu__whatsapp"
                >
                  <WhatsAppIcon size={18} />
                  <span>Chat on WhatsApp</span>
                </a>

                <Link
                  to="/booking"
                  className="mobile-menu__booking"
                  onClick={closeMenu}
                >
                  Book Your Session
                </Link>

              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

/* =========================================
   CART ICON
========================================= */

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="21"
      height="21"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
  );
}

/* =========================================
   WHATSAPP ICON
========================================= */

export function WhatsAppIcon({ size = 17 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2a9.9 9.9 0 0 0-8.4 15.2L2 22l4.9-1.6A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.1 15.1l-.3-.2-2.9 1 1-2.8-.2-.3a8.1 8.1 0 0 1 6.5-12.8Zm-3.2 4.1c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.6 1.1 2.7c.1.2 1.9 3 4.7 4.1 2.3.9 2.8.8 3.3.7.5 0 1.6-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7.1l-1 1.2c-.2.2-.4.2-.7.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5s0-.4 0-.5l-.9-2.2c-.2-.6-.5-.6-.7-.6Z" />
    </svg>
  );
}