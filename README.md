# ⚡ Digital Decision Engine

A clean, dark-themed web app that helps you score and rank decision options using weighted criteria — no backend, no build step, just open and use.

## 🖥️ Live Demo

[https://rajnarottam38-tech.github.io/digital-decision-engine](https://rajnarottam38-tech.github.io/digital-decision-engine)

## ✨ What It Does

- Add multiple options with 5 scored attributes (Cost, Growth, Risk, Time, Stability)
- Adjust how much each factor matters using live sliders
- Hit Calculate — options are ranked by score with visual progress bars
- Top result gets highlighted with a 🏆 trophy

## 🧮 Score Formula

```
score = (cost × w) + (growth × w) - (risk × w) + (time × w) + (stability × w)
```

> Risk is subtracted — higher risk lowers the score.

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
