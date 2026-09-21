# Basva Yoga & Wellness Center 🌿

A modern, serene, and responsive website built for the **Basva Yoga & Wellness Center**, featuring a welcoming **"Hello Basva"** greeting, interactive mindful breathing guide, daily class rhythm, and holistic wellness offerings.

---

## 🌐 Live URL & Repository

- **Production URL**: [https://basva-wellness.vercel.app](https://basva-wellness.vercel.app)
- **GitHub Repository**: [https://github.com/agam2993/basva-wellness](https://github.com/agam2993/basva-wellness)
- **Vercel Project Dashboard**: [https://vercel.com/agam-2993/basva-wellness](https://vercel.com/agam-2993/basva-wellness)

---

## 🔄 CI/CD Deployment Workflow

This project follows the continuous deployment lifecycle:
1. **Make changes locally** in `d:\Basva`
2. **Preview and test** in your browser (`index.html`)
3. **Commit & Push to GitHub**:
   ```bash
   git add .
   git commit -m "Update sanctuary details"
   git push
   ```
4. **Automatic Vercel Deployment**: Vercel detects the push and deploys the update immediately to the edge network.

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

## 📁 File Structure

```text
d:\Basva/
├── .gitignore        # Git ignore rules
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
