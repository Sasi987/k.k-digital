# KK DIGITAL STUDIO — Website

Ultra-premium photography studio website: React + Vite frontend, Framer Motion, pure CSS,
plus a minimal Express backend for the WhatsApp Business Cloud API webhook and booking notifications.

## Stack

- **Frontend:** React 18 (JSX), React Router 6, Framer Motion, pure CSS, LocalStorage cart
- **Backend:** Node + Express — WhatsApp webhook verification, intent detection, automatic replies, booking notifications
- **No** TypeScript, Tailwind, Bootstrap, MUI, Next.js, or admin panel

## Getting Started

```bash
npm install
cp .env.example .env   # fill in your WhatsApp Cloud API credentials
npm run dev            # frontend on :5173 (proxies /api + /webhook to :4000)
npm run server         # backend on :4000 (run in a second terminal)
```

## WhatsApp Cloud API Setup

1. Create an app at [developers.facebook.com](https://developers.facebook.com), add the **WhatsApp** product.
2. Copy your **Phone Number ID**, **WhatsApp Business Account ID**, and a **permanent access token** into `.env`.
3. Set `WHATSAPP_VERIFY_TOKEN` to any random string you choose.
4. Expose your server publicly (e.g. `ngrok http 4000`), then in the Meta app dashboard:
   - **Callback URL:** `https://your-domain/webhook`
   - **Verify token:** the value of `WHATSAPP_VERIFY_TOKEN`
   - Subscribe to the `messages` webhook field.
5. Incoming messages now receive automatic replies (greeting menu, booking, wedding, portrait, frames, packages, human support).

## Structure

```
server/           Express backend (WhatsApp webhook + booking API)
  index.js        Routes: GET/POST /webhook, POST /api/booking, GET /api/health
  whatsapp.js     Intent engine, reply templates, Cloud API sender
src/
  components/     Navbar, Hero, Lightbox, FrameCustomizer, BookingForm,
                  WhatsAppButton, WhatsAppAutoReply, MobileBottomBar, Footer, …
  context/        CartContext (LocalStorage persistence)
  data/           frames.js, gallery.js, packages.js
  pages/          Home, About, Services, Portfolio, Gallery, Wedding, Portrait,
                  Packages, PhotoFrames, FrameProduct, Cart, Booking, Contact
  utils/          whatsapp.js (wa.me deep links), motion.js (shared variants)
```

## Notes

- Cart persists in LocalStorage (`kkds_cart_v1`).
- The frontend never sees WhatsApp secrets — all automation is server-side.
- Without credentials in `.env`, the backend runs in dry-run mode and logs replies to the console.
- `prefers-reduced-motion` is respected globally.
