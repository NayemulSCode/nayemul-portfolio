# Nayemul Saheb — Portfolio

Futuristic, glassmorphic personal portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **React Hook Form**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS custom properties |
| Animations | Framer Motion + CSS keyframes |
| Forms | React Hook Form + Zod validation |
| Email | Nodemailer (SMTP) |
| Notifications | react-hot-toast |
| SEO | Next.js Metadata API, sitemap, robots |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.local.example .env.local
```

Open `.env.local` and fill in your SMTP credentials:

```env
# Gmail example (use an App Password — not your account password)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password

# Where contact form messages should land
CONTACT_EMAIL=nayemul@example.com

# Optional — Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Your live domain
NEXT_PUBLIC_SITE_URL=https://nayemulsaheb.dev
```

> **Gmail App Password:** Go to Google Account → Security → 2-Step Verification → App Passwords → generate one for "Mail".

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production

```bash
npm run build
npm start
```

---

## Customisation

### Update your personal info

All portfolio content lives in **one file**:

```
src/lib/data.ts
```

Edit `PERSONAL`, `STATS`, `SKILLS`, `TECH_STACK`, `PROJECTS`, `TESTIMONIALS`, and `GALLERY` to replace placeholder content with your real information.

### Add real gallery photos

In `src/components/sections/GallerySection.tsx`, replace the gradient `div` backgrounds with `<Image>` components:

```tsx
// Replace this:
<div className="absolute inset-0" style={{ background: item.gradient }} />

// With this:
import Image from "next/image";
<Image src={item.src} alt={item.label} fill className="object-cover" />
```

Then add a `src` field to each item in `GALLERY` inside `src/lib/data.ts`.

### Change colour accent

All colours are CSS custom properties in `src/app/globals.css`. To change the primary neon from cyan to any other colour, update:

```css
--cyan:      #00f5ff;  /* ← change this */
--cyan2:     #00c4cc;  /* ← and this    */
--cyan-dim:  rgba(0,245,255,0.12);
--cyan-glow: rgba(0,245,255,0.25);
```

---

## Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

Set the same environment variables in your Vercel project dashboard under **Settings → Environment Variables**.

### Other platforms (Netlify, Railway, etc.)

```bash
npm run build   # generates .next/
npm start       # serves on PORT (default 3000)
```

---

## Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # Nodemailer email API
│   ├── globals.css            # Design tokens + base styles
│   ├── layout.tsx             # Root layout, fonts, metadata
│   ├── page.tsx               # Home page — assembles all sections
│   ├── sitemap.ts             # Auto-generated sitemap
│   └── robots.ts              # robots.txt
├── components/
│   ├── layout/
│   │   ├── BackgroundLayers.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TechStackSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── GallerySection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── ProjectCard.tsx
│       ├── Reveal.tsx
│       ├── SectionHeader.tsx
│       ├── SkillBar.tsx
│       └── TestimonialCard.tsx
├── hooks/
│   ├── useInView.ts
│   └── useScrollSpy.ts
├── lib/
│   ├── data.ts                # ← All your content lives here
│   └── utils.ts
└── types/
    └── index.ts               # Zod schema + TypeScript types
```

---

## License

MIT — free to use and customise.
