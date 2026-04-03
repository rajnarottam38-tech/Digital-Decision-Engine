# ⚡ Digital Decision Engine

A clean, dark-themed web app that helps you score and rank decision options using weighted criteria — no backend, no build step, just open and use.

## 🖥️ Live Demo

[https://incomparable-buttercream-a3d516.netlify.app](https://incomparable-buttercream-a3d516.netlify.app)

## ✨ What It Does

- Add multiple options with 5 scored attributes (Cost, Growth, Risk, Time, Stability)
- Adjust how much each factor matters using live sliders
- Hit Calculate — options are ranked by score with visual progress bars
- Top result gets highlighted with a 🏆 trophy

## 🧮 Score Formula

```
score = (cost_normalized × w) + (growth% / 10 × w) - (risk × w) + (time_score × w) + (stability × w)
```

- Cost → any positive amount (e.g. $50,000), normalized internally
- Growth → percentage (0–100%)
- Risk → Low (2) / Medium (5) / High (8) / Critical (10) — subtracted from score
- Time → in years (0.5–30), shorter = better score
- Stability → 1–10 scale

## 🗂️ Project Structure

```
digital-decision-engine/
├── index.html           # Main UI
├── app.js               # Logic (add options, calculate, render results)
└── styles/
    ├── main.css         # Dark theme styles
    ├── core/            # Scoring, ranking, risk, confidence engines
    ├── pages/           # Builder & results pages
    └── ui/              # Modular UI components
```

## ▶️ How to Run

**Option 1 — Python**
```bash
python -m http.server 8080 --bind 127.0.0.1
```
Then open `http://127.0.0.1:8080`

**Option 2 — VS Code Live Server**
Right-click `index.html` → Open with Live Server

**Option 3 — Node**
```bash
npx serve .
```

## 🔮 Planned

- AI-based recommendations
- Export results to PDF/Excel
- Backend integration (FastAPI / Node.js)
- User authentication & saved sessions
