# Bishwa — The Deep Dev

Personal brand website for **Bishwajeet Singh** — a software developer, deep thinker, and life coach passionate about helping people grow mentally and emotionally.

---

## Tech Stack

- **React** + **TypeScript**
- **Vite** (dev server)
- **React Router DOM** (routing)
- Inline CSS (no external CSS framework)
- Global CSS reset in `src/index.css`

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Sticky top navbar with brand + nav links + auth buttons
│   ├── Hero.tsx            # Hero section with bio, CTA buttons, and personal photo
│   ├── FeaturedProducts.tsx # (kept, unused) — books section removed from home
│   └── Footer.tsx          # Footer with brand tagline and copyright
├── pages/
│   ├── Home.tsx            # Home page (Hero section only)
│   ├── Sessions.tsx        # Session booking page (Mon–Sun, 7 day cards)
│   ├── About.tsx           # About page (bio, skills, values, quote)
│   ├── Contact.tsx         # Contact page (hero banner, info cards, message form)
│   ├── Login.tsx           # Login page with "← Back to Home" link
│   └── Signup.tsx          # Signup page with "← Back to Home" link
├── layouts/
│   └── MainLayout.tsx      # Shared layout (Navbar + Footer wrapper)
├── data/
│   └── products.ts         # Dummy books data (8 books — unused after books section removed)
└── App.tsx                 # Routes config
public/
└── bishwa.jpg              # Personal photo used in Hero and About pages
```

---

## Pages & Routes

| Route | Page | Layout |
|---|---|---|
| `/` | Home | MainLayout |
| `/sessions` | Sessions | MainLayout |
| `/about` | About | MainLayout |
| `/contact` | Contact | MainLayout |
| `/login` | Login | No layout |
| `/signup` | Signup | No layout |

---

## Features Built

### Navbar
- Sticky (stays on top while scrolling)
- Full browser width (no side gaps)
- Brand: **Bishwa — The Deep Dev**
- Links: Home · Sessions · About · Contact
- Auth: **Sign In** (plain text) + **Get Started** (dark button, gold text)

### Home Page
- Hero section with personal bio
- Tagline: *"True Growth Begins in the Mind."*
- Roles: Software Developer · Deep Thinker · Life Coach
- Personal photo (`/bishwa.jpg`)
- CTA: "Book a Session" button

### Sessions Page
- Hero banner with dark overlay
- **7 day cards** — Monday to Sunday
- Each card: day badge (gold), topic, description, time, price (₹999), Book button
- 4-column grid layout

### About Page
- Hero banner
- Intro section: personal photo + bio text
- **What I Do** — 3 cards (Developer, Deep Thinker, Life Coach)
- **What I Believe In** — 6 values grid
- Quote banner: *"True growth begins in the mind."* — Bishwajeet Singh

### Contact Page
- Hero banner with background image
- 3 info cards: 📞 Phone (+91 8381803564) · ✉️ Email · 📍 Location
- Contact form: Name, Email, Message, Send button

### Login & Signup
- Clean card UI centered on screen
- Form validation (signup: password match)
- "← Back to Home" link on both pages
- Cross-links: Login ↔ Signup

### Global Fixes
- CSS reset (`* { margin: 0; padding: 0; box-sizing: border-box; }`)
- `body { overflow-x: hidden; }` — no horizontal scroll
- Navbar `position: sticky` — doesn't move on scroll
- Personal photo stored locally in `public/bishwa.jpg`

---

## Run Locally

```bash
npm install
npm run dev
```
