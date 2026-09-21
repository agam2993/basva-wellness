# Basva Yoga & Wellness Center 🌿

A modern, serene, and responsive website built for the **Basva Yoga & Wellness Center**, featuring a welcoming **"Hello Basva"** greeting, interactive mindful breathing guide, daily class rhythm, and holistic wellness offerings.

---

## ✨ Features Included

1. **"Hello Basva" Sanctuary Hero**:
   - Welcoming greeting and visual intro featuring custom serene imagery.
   - Live Sanctuary status and quick access to mindful breathwork.

2. **Interactive Mindful Breathing Guide (4-4-4 Box Breath)**:
   - Visual breathing pulse with Inhale (4s) → Hold (4s) → Exhale (4s) states.
   - Built-in Tibetan Singing Bowl harmonic chime synthesized with Web Audio API (no heavy external audio files required).

3. **Curated Offerings Preview**:
   - Vinyasa & Hatha Movement Flow.
   - Tibetan Sound Bath & Crystal Bowls.
   - Pranayama & Meditation.

4. **Interactive Daily Rhythm Schedule**:
   - Morning Awakening, Midday Re-center, and Sunset Yin schedule tabs with 1-click mat reservation feedback.

5. **Aesthetic Design System**:
   - Earthy sage green, warm terracotta, calming linen, and muted gold color palette.
   - Typography: Google Fonts `Playfair Display` & `Plus Jakarta Sans`.
   - Built-in theme switcher (Serene Light & Deep Evening Dark modes).

---

## 🚀 How to Deploy to Vercel

This repository is already configured with `vercel.json` for zero-configuration, lightning-fast deployment on Vercel.

### Method 1: Deploy via Vercel Dashboard (Easiest - 1 Minute)
1. Go to [vercel.com](https://vercel.com) and log in or create a free account.
2. Click **"Add New..."** → **"Project"**.
3. Import your Git repository (GitHub/GitLab/Bitbucket).
4. Vercel will automatically detect the static project. Click **"Deploy"**.
5. Your live URL will be ready immediately!

### Method 2: Deploy via Vercel CLI
If you have Node.js and the Vercel CLI installed:
```bash
# In this directory (d:\Basva):
npx vercel
```
Follow the quick prompts (accept defaults). To deploy to production:
```bash
npx vercel --prod
```

### Method 3: Drag & Drop (Instant Preview)
1. Go to [vercel.com/new](https://vercel.com/new).
2. Drag and drop the `Basva` project folder directly into the browser.
3. Your site will be deployed instantly with a public `.vercel.app` URL.

---

## 📁 File Structure

```text
d:\Basva\
├── index.html        # Main landing page with Hello Basva hero & sections
├── styles.css        # Vanilla CSS design system, dark mode & animations
├── script.js         # Interactive breathing logic, schedule tabs, audio chime
├── vercel.json       # Production Vercel headers, caching & clean URLs
├── README.md         # Deployment & documentation guide
└── assets/           # High-resolution wellness sanctuary images
    ├── hero-sanctuary.jpg
    ├── sound-healing.jpg
    └── yoga-flow.jpg
```

---

*Namaste and welcome to Basva Yoga & Wellness Center.*
