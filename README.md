# Elvora Film — Premium Wedding Photography & Cinematography Website

> **"Your story. Your emotions. Your forever."**  
> *"We don't just capture moments. We preserve emotions for generations."*

A bespoke, production-grade digital experience for **Elvora Film**, a luxury wedding photography and cinematography studio based in Bhubaneswar, Odisha, India.

---

## 1. Brand & Studio Information

- **Studio Name**: Elvora Film
- **Location**: Plot No. 451, Bhagawanpur, Patrapada, Bhubaneswar, Odisha, India - 751019
- **Phone / Direct Line**: [+91 8895499662](tel:918895499662)
- **WhatsApp**: [wa.me/918895499662](https://wa.me/918895499662)
- **Email**: [elvorafilm@gmail.com](mailto:elvorafilm@gmail.com)
- **Instagram**: [@elvorafilm](https://www.instagram.com/elvorafilm?obrf=YTY2M2RmcHJjb2Jv)
- **Website**: [https://www.elvorafilm.com](https://www.elvorafilm.com)

---

## 2. Creative Vision & Design Aesthetics

- **Editorial Typography**: 
  - Headings: `Cormorant Garamond` (editorial serif with delicate letterforms)
  - Body & UI: `Plus Jakarta Sans` (ultra-readable modern sans-serif)
  - Labels & Subtitles: `Cinzel` / uppercase letter-spaced trackings (`0.18em - 0.26em`)
- **Curated Color Palette**:
  - Primary Background: Warm Ivory (`#FAF7F2`)
  - Secondary Background: Cinematic Charcoal / Black (`#0C0C0E` and `#121215`)
  - Text Primary: Rich near-black (`#181614`) / Soft off-white (`#F7F4EE`)
  - Text Muted: Warm grey (`#6B665F`) / Studio muted (`#A39D93`)
  - Accent: Antique Gold & Champagne (`#C5A059`, `#DFC48C`)
- **Visual Composition**: Asymmetrical editorial panels, full-width cinematic film stills, 16:9 cinema player frame, high-resolution authentic Indian wedding photography, gold monogram crest.

---

## 3. Website Architecture & Routes

The website features 8 dedicated pages with instant client-side routing, hash support, and smooth scroll restoration:

1. **Home (`/`)**:
   - `Hero`: Editorial headline (*"Some Moments Deserve To Live Forever"*), dual CTAs, brand signature, Bhubaneswar coordinate badge, 4K showreel trigger.
   - `Brand Story`: *"More Than Photographs — Because The Best Memories Are The Ones You Can Feel Again"*.
   - `Selected Stories`: Filterable portfolio showcase (All, Films, Photography, Candid, Pre-Wedding, Documentary).
   - `Film Showcase`: 16:9 cinematic video panel with play trigger, sound design note, and modal player.
   - `Our Craft`: 8 detailed disciplines with deliverables checklists.
   - `The Elvora Approach`: 4-stage timeline (01 Understand, 02 Plan, 03 Capture, 04 Preserve).
   - `Our Difference`: 7 studio commitments (including One Free Edit Revision, Dedicated FPV pilots, Natural Skin Tones).
   - `Wedding Packages`: Gamma Essential, Beta Advanced, and Alpha Signature.
   - `The People & Emotions`: Photographic sequence of unscripted moments.
   - `Client Trust & Stories`: Authentic client feedback portal.
   - `Frequently Asked Questions`: 10 comprehensive FAQs with accordion interaction.
   - `Final Conversion`: Emotional call-to-action with dual WhatsApp and Inquiry triggers.
   - `Footer`: Complete address, contact numbers, Instagram, sitemap, legal links.
2. **Our Stories (`/stories` or `/#stories`)**: Full gallery archive with category filtering and interactive project modal viewer.
3. **Services (`/services` or `/#services`)**: Deep-dive into all 8 photography and film disciplines.
4. **Packages (`/packages` or `/#packages`)**: Side-by-side inclusion comparison matrix and direct inquiry links.
5. **About (`/about` or `/#about`)**: Core brand philosophy, Odisha roots, craft ethics, and commitment to emotional preservation.
6. **Contact / Inquiry (`/contact` or `/#contact`)**: Complete wedding inquiry form, validation, and direct studio contacts.
7. **Privacy Policy (`/privacy` or `/#privacy`)**: Clear data collection disclosure tailored to wedding inquiry management.
8. **Terms & Conditions (`/terms` or `/#terms`)**: Transparent website usage terms distinguishing inquiries from formal contracts.

---

## 4. Wedding Inquiry & WhatsApp Integration

### Form Validation & Integrity
The wedding inquiry system includes comprehensive field-level validation:
- Name, Email, Phone (10+ digits), Wedding Date, Location, Event Type, and Package selection.
- Anti-spam honeypot suppression.
- Local persistence in `localStorage` so couples never lose entered details.
- **Transparent Delivery Hub**: The form explicitly avoids fake success states. Once verified, it generates a formatted message with a **1-click WhatsApp Dispatch** opening `wa.me/918895499662` with all details pre-filled.

### WhatsApp Action Shortcuts
Pre-configured contextual messages:
- General Inquiry: `"Hi Elvora Film, I would like to discuss wedding photography and cinematography for my wedding."`
- Package Inquiry: `"Hi Elvora Film, I am interested in the [PACKAGE NAME] package. Could you share more details?"`
- Availability Check: `"Hi Elvora Film, I would like to check your availability for my wedding date [DATE] in [LOCATION]."`

---

## 5. Official Packages (Matched to Studio Specifications)

### GAMMA — Essential Package
- 4 Reels
- 10 Posts
- Drone aerial coverage
- 3-day shoot
- Engagement edit video, reels, and post
- Teaser
- One full cinematic edit video
- 20-page advanced-design album
- Pendrive
- Post calendar

### BETA — Advanced Package
- 6 Reels
- 20 Posts
- Drone aerial coverage
- 3 Days To Go post
- 2-day pre-wedding coverage
- 5-day shoot including pre-wedding
- Pre-wedding videos, reels, and post
- Engagement edit video, reels, and post
- Teaser and highlights
- One full cinematic edit video
- 25-page advanced-design box album
- Pendrive
- Mini album book
- Post calendar

### ALPHA — Signature Package
- 8 Reels
- 30 Posts
- Drone aerial coverage
- 3 Days To Go post
- 3-day pre-wedding coverage
- 6-day shoot including pre-wedding
- Pre-wedding videos, reels, and post
- Engagement edit video, reels, and post
- Teaser and highlights
- One full cinematic edit video
- 30-page advanced-design box album
- Pendrive
- Mini album book
- Post calendar
- Server Face Cam
- Candid shoot
- FPV shoot
- Documentary short video

---

## 6. Project Setup & Deployment

### Run Locally
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
npm run preview
```

### Static Host Deployment
This project builds into standard static files in `dist/` ready for immediate deployment on:
- Vercel (`vercel deploy`)
- Netlify (`netlify deploy --prod --dir=dist`)
- Cloudflare Pages / GitHub Pages
- Shared cPanel hosting (copy contents of `dist/` into `public_html`)

---

## 7. Managing Studio Content

- **Portfolio Projects**: Edit `src/data/portfolioData.js` to add, reorder, or replace wedding stories.
- **Brand Info & Contact**: Edit `src/data/brandInfo.js` to change phone numbers, addresses, or commitments.
- **Packages**: Edit `src/data/packagesData.js` to update inclusions, prices, or add new packages.
- **FAQs**: Edit `src/data/faqData.js` to update or expand frequently asked questions.
- **Logo / Emblem**: Replace `public/assets/images/elvora-emblem.png` with any updated crest file.
