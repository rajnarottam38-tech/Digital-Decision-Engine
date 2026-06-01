<div align="center">

<!-- Typing SVG Banner -->
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&duration=3000&pause=1000&color=6366F1&center=true&vCenter=true&width=600&lines=⚡+Digital+Decision+Engine;Score.+Rank.+Decide.;AI-Powered+Decision+Making)](https://incomparable-buttercream-a3d516.netlify.app)

<br/>

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Netlify-6366f1?style=for-the-badge&logo=netlify&logoColor=white)](https://incomparable-buttercream-a3d516.netlify.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/rajnarottam38-tech/digital-decision-engine)
[![FastAPI](https://img.shields.io/badge/Python-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)

<br/>

> **A smart, multi-criteria decision support web app** that scores, ranks, and analyzes your options using weighted criteria — with a built-in AI recommendation engine and a FastAPI session backend.

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Score Formula](#-score-formula)
- [AI Recommendation Engine](#-ai-recommendation-engine)
- [Project Structure](#️-project-structure)
- [Run Locally](#️-run-locally)
- [API Reference](#-api-reference)
- [Input Criteria](#-input-criteria)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)

---

## 🧠 Overview

**Digital Decision Engine** helps you make data-driven decisions by quantifying trade-offs across multiple factors — cost, growth, risk, time, and stability.

Whether you're choosing between business strategies, investment options, or product launches, this tool removes guesswork and replaces it with **structured, weighted analysis** and **automatic AI insights**.

---

## ✨ Features

| Feature | Description |
|---|---|
| ⚖️ **Weighted Scoring** | Adjust live sliders to control how much each factor influences the final score |
| 📊 **Ranked Results** | Options ranked by score with visual progress bars for instant comparison |
| 🤖 **AI Recommendation Engine** | Automatic insights — risk warnings, gap analysis, growth feedback, ROI signals |
| 💾 **Session Save / Load** | Persist your decision sets via FastAPI backend and reload anytime |
| 🌙 **Dark Responsive UI** | Fully responsive dark theme with smooth animations across all screen sizes |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, Vanilla JavaScript, CSS3 |
| Backend | Python, FastAPI, Uvicorn |
| Deployment | Netlify (frontend) |
| Styling | Custom dark theme with CSS variables |

---

## 🧮 Score Formula

Each option is evaluated using a composite weighted score:

```
score = (cost_norm × w₁) + (growth% / 10 × w₂) − (risk × w₃) + (time_score × w₄) + (stability × w₅)
```

**Normalization rules:**
- **Cost** → `min(10, cost / 1000)` — lower cost, higher score
- **Risk** → subtracted; higher risk lowers the total score
- **Time** → `max(1, 10 − time × 0.3)` — shorter timeframe scores higher

All weights are user-controlled via sliders (0–10), letting you prioritize what matters most to your decision.

---

## 🤖 AI Recommendation Engine

After scoring, the engine generates context-aware insights automatically:

```
🏆 Strategy A leads by 45% — clear winner
⚠️  High risk detected — have a mitigation plan ready
📈 80% growth potential — strong long-term pick
⚡ 1.5-year turnaround — favorable for fast ROI
🔍 Options are close — small weight shift could change the outcome
```

The engine checks for:
- **Dominant leaders** — large score gaps signal clear choices
- **Risk flags** — warns when high/critical risk options rank highly
- **Growth signals** — highlights top growth potential
- **Time-to-value** — identifies fast ROI candidates
- **Competitive gaps** — alerts when scores are too close to call

---

## 🗂️ Project Structure

```
digital-decision-engine/
├── 📄 index.html                 ← Full UI (inputs, weight sliders, results, session panel)
├── ⚙️  app.js                    ← Core logic (scoring engine, AI insights, session API calls)
├── 🎨 styles/
│   └── main.css                  ← Dark theme, responsive layout, animations
└── 🐍 styles/ui/backend/
    ├── app.py                    ← FastAPI server (save, load, list, delete sessions)
    └── requirements.txt          ← Python dependencies
```

> **Note:** The backend folder path (`styles/ui/backend/`) is non-standard. Consider moving it to a top-level `backend/` directory for clarity.

---

## ▶️ Run Locally

### Frontend

```bash
# Serve using Python's built-in HTTP server
python -m http.server 8080 --bind 127.0.0.1

# Open in browser
# http://127.0.0.1:8080
```

### Backend

```bash
# Navigate to backend directory
cd styles/ui/backend

# Install dependencies
pip install -r requirements.txt

# Start FastAPI server
uvicorn app:app --reload

# API running at:  http://127.0.0.1:8000
# Swagger docs at: http://127.0.0.1:8000/docs
```

> Make sure both servers are running simultaneously for session save/load to work.

---

## 🔌 API Reference

Base URL: `http://127.0.0.1:8000`

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/save` | Save current decision session |
| `GET` | `/load/{id}` | Load a saved session by ID |
| `GET` | `/sessions` | List all saved sessions |
| `DELETE` | `/session/{id}` | Delete a session by ID |

Interactive API docs available at `/docs` (Swagger UI) when the backend is running.

---

## 📋 Input Criteria

| Field | Format | Notes |
|---|---|---|
| 💰 Cost | Any positive number | e.g. `50000` — normalized internally |
| 📈 Growth | Percentage (0–100%) | Higher = better score |
| ⚠️ Risk | Dropdown | Low / Medium / High / Critical |
| ⏳ Time | Years (0.5–30) | Shorter = higher score |
| 🏛️ Stability | Scale (1–10) | Higher = better score |

---

## 🔮 Roadmap

- [ ] 📤 Export results to PDF / Excel
- [ ] 👤 User authentication & personal dashboards
- [ ] 🗄️ PostgreSQL persistent database
- [ ] 🤖 OpenAI-powered natural language recommendations
- [ ] 📊 Charts & visual analytics (radar, bar comparisons)
- [ ] 🔗 Shareable decision links

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add: your feature description'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

