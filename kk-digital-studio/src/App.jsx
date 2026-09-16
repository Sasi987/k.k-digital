import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import MobileBottomBar from './components/MobileBottomBar.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import ContentProtection from './components/ContentProtection/ContentProtection.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'));
const Wedding = lazy(() => import('./pages/Wedding.jsx'));
const Portrait = lazy(() => import('./pages/Portrait.jsx'));
const Packages = lazy(() => import('./pages/Packages.jsx'));
const PhotoFrames = lazy(() => import('./pages/PhotoFrames.jsx'));
const FrameProduct = lazy(() => import('./pages/FrameProduct.jsx'));
const Cart = lazy(() => import('./pages/Cart.jsx'));
const Booking = lazy(() => import('./pages/Booking.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', paddingTop: 'var(--navbar-h)' }}>
      <span className="eyebrow">KK Digital Studio</span>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <ScrollToTop />
      <main id="main-content">
        <ContentProtection>
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/wedding" element={<Wedding />} />
                <Route path="/portrait" element={<Portrait />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/photo-frames" element={<PhotoFrames />} />
                <Route path="/photo-frames/:id" element={<FrameProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </ContentProtection>
      </main>
      <Footer />
      <MobileBottomBar />
      <WhatsAppButton />
    </>
  );
}
