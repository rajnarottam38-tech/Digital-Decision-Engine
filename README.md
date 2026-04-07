<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&duration=3000&pause=1000&color=6366F1&center=true&vCenter=true&width=600&lines=⚡+Digital+Decision+Engine;Score.+Rank.+Decide.;AI-Powered+Decision+Making" alt="Typing SVG" />

<br/>

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Netlify-6366f1?style=for-the-badge&logo=netlify&logoColor=white)](https://incomparable-buttercream-a3d516.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/rajnarottam38-tech/digital-decision-engine)
[![Made With JS](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Python](https://img.shields.io/badge/Python-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)

<br/>

> A smart web app that scores, ranks, and analyzes your decisions using weighted criteria — with an AI recommendation engine and FastAPI backend.

</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| ⚖️ Weighted Scoring | Set how much each factor matters using live sliders |
| 📊 Ranked Results | Options ranked by score with visual progress bars |
| 🤖 AI Recommendations | Automatic insights — risk warnings, gap analysis, growth feedback |
| 💾 Session Save/Load | Save your options via FastAPI backend and reload anytime |
| 🌙 Dark UI | Fully responsive dark theme with smooth animations |

---

## 🖥️ Preview

<div align="center">
<img src="https://img.shields.io/badge/Dark_Theme-UI-6366f1?style=for-the-badge" />
<img src="https://img.shields.io/badge/AI_Powered-Recommendations-22c55e?style=for-the-badge" />
<img src="https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge" />
</div>

---

## 📊 Input Criteria

| Field | Format | Notes |
|-------|--------|-------|
| 💰 Cost | Any positive number | e.g. 50000 — normalized internally |
| 📈 Growth | Percentage (0–100%) | Higher = better |
| ⚠️ Risk | Dropdown | Low / Medium / High / Critical |
| ⏳ Time | Years (0.5–30) | Shorter = better score |
| 🏛️ Stability | Scale (1–10) | Higher = better |

---

## 🧮 Score Formula

```
score = (cost_norm × w) + (growth% / 10 × w) - (risk × w) + (time_score × w) + (stability × w)
```

- Risk is **subtracted** — higher risk lowers the score
- Cost normalized: `min(10, cost / 1000)`
- Time score: `max(1, 10 - time × 0.3)` — shorter = higher score

---

## 🤖 AI Recommendation Engine

After calculating, the engine automatically generates insights:

```
🏆 Strategy A leads by 45% — clear winner
⚠️  High risk detected — have a mitigation plan
📈 80% growth potential — strong long-term pick
⚡ 1.5 year turnaround — good for fast ROI
```

---

## 🗂️ Project Structure

```
digital-decision-engine/
├── 📄 index.html              ← Full UI (input, weights, results, session)
├── ⚙️  app.js                 ← All logic (scoring, AI engine, session API)
├── 🎨 styles/main.css         ← Dark theme & responsive layout
└── 🐍 styles/ui/backend/
    ├── app.py                 ← FastAPI (save/load sessions)
    └── requirements.txt
```

---

## ▶️ Run Locally

**Frontend**
```bash
python -m http.server 8080 --bind 127.0.0.1
# Open http://127.0.0.1:8080
```

**Backend**
```bash
cd styles/ui/backend
pip install -r requirements.txt
uvicorn app:app --reload
# API at http://127.0.0.1:8000
# Docs at http://127.0.0.1:8000/docs
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/save` | Save session |
| `GET` | `/load/{id}` | Load session |
| `GET` | `/sessions` | List all sessions |
| `DELETE` | `/session/{id}` | Delete session |

---

## 🔮 Roadmap

- [ ] 📤 Export results to PDF / Excel
- [ ] 👤 User authentication
- [ ] 🗄️ PostgreSQL database
- [ ] 🤖 OpenAI-powered recommendations
- [ ] 📊 Charts & visual analytics

---

<div align="center">

Made with ❤️ by [rajnarottam38-tech](https://github.com/rajnarottam38-tech)

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=rajnarottam38-tech.digital-decision-engine)

</div>
