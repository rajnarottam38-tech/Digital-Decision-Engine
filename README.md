# ⚡ Digital Decision Engine

A smart, dark-themed web app that helps you score, rank, and analyze decision options using weighted criteria — with AI-powered recommendations and a FastAPI backend for saving sessions.

## 🖥️ Live Demo

[https://incomparable-buttercream-a3d516.netlify.app](https://incomparable-buttercream-a3d516.netlify.app)

---

## ✨ Features

- Add multiple options with 5 real-world criteria
- Adjust criteria importance using live weight sliders
- Ranked results with score progress bars
- 🤖 AI recommendations — gap analysis, risk warnings, growth & timeline insights
- 💾 Save & load sessions via FastAPI backend
- Fully responsive dark UI

---

## 📊 Input Criteria

| Field | Format | Notes |
|-------|--------|-------|
| Cost | Any positive number | e.g. 50000 — normalized internally |
| Growth | Percentage (0–100%) | Higher = better |
| Risk | Dropdown | Low / Medium / High / Critical |
| Time | Years (0.5–30) | Shorter = better score |
| Stability | Scale (1–10) | Higher = better |

---

## 🧮 Score Formula

```
score = (cost_norm × w) + (growth% / 10 × w) - (risk × w) + (time_score × w) + (stability × w)
```

- Risk is subtracted — higher risk lowers the score
- Cost is normalized: `min(10, cost / 1000)`
- Time score: `max(1, 10 - time × 0.3)` — shorter timelines score higher

---

## 🤖 AI Recommendation Engine

After calculating, the engine automatically analyzes results and shows:

- Score gap between top 2 options
- Risk warnings for High / Critical options
- Growth potential insight
- Timeline feasibility feedback

---

## 🗂️ Project Structure

```
digital-decision-engine/
├── index.html                  # Main UI
├── app.js                      # Frontend logic + AI engine
├── styles/
│   ├── main.css                # Dark theme styles
│   ├── core/                   # Scoring, ranking, risk, confidence engines
│   ├── pages/                  # Builder & results pages
│   └── ui/
│       ├── inputpanel.js
│       ├── resultpanel.js
│       ├── weightpanel.js
│       └── backend/
│           ├── app.py          # FastAPI backend
│           └── requirements.txt
```

---

## ▶️ Run Frontend

```bash
python -m http.server 8080 --bind 127.0.0.1
```
Open `http://127.0.0.1:8080`

---

## ⚙️ Run Backend (FastAPI)

```bash
cd styles/ui/backend
pip install -r requirements.txt
uvicorn app:app --reload
```

Backend runs at `http://127.0.0.1:8000`
API docs at `http://127.0.0.1:8000/docs`

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/save` | Save a session |
| GET | `/load/{session_id}` | Load a session |
| GET | `/sessions` | List all sessions |
| DELETE | `/session/{session_id}` | Delete a session |

---

## 🔮 Roadmap

- [ ] Export results to PDF / Excel
- [ ] User authentication
- [ ] Database storage (PostgreSQL)
- [ ] OpenAI-powered recommendations
- [ ] Charts & visual analytics
