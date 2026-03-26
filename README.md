🚀 Digital Decision Engine

A lightweight web-based decision-making system that helps users evaluate multiple options using scoring, ranking, risk, and confidence analysis.

📌 Overview

The Digital Decision Engine is a frontend-based application that allows users to:

Define decision options
Assign weights to criteria
Calculate scores dynamically
Analyze risk and confidence
View ranked results

It uses modular JavaScript engines to simulate intelligent decision-making.

✨ Features
📊 Weighted scoring system
📈 Option ranking engine
⚠️ Risk evaluation module
🎯 Confidence calculation
💡 Modular architecture (easy to extend)
💻 Clean UI with multiple panels
🏗️ Project Structure




digital-decision-engine/
│
├── index.html                 # Entry point
├── app.js                     # Main controller logic
│
├── styles/
│   ├── main.css              # Global styling
│
│   ├── core/                 # Decision engines
│   │   ├── scoringEngine.js
│   │   ├── rankingEngine.js
│   │   ├── riskEngine.js
│   │   ├── confidenceEngine.js
│   │   └── data/
│   │       └── decisionModel.js
│
│   ├── pages/                # Application pages
│   │   ├── builder.html
│   │   ├── results.html
│   │   └── components/
│   │       ├── layout.js
│   │       └── navbar.js
│
│   └── ui/                   # UI components
│       ├── inputPanel.js
│       ├── resultPanel.js
│       ├── WeightPanel.js
│       ├── chartpanel.js
│       └── utils/
│           ├── math.js
│           └── storage.js



⚙️ How It Works

User enters decision options in Input Panel
Assigns weights using Weight Panel
System processes data using:
scoringEngine.js
riskEngine.js
confidenceEngine.js
Results are ranked using rankingEngine.js
Output displayed in Result Panel + Charts


▶️ How to Run
✅ Method 1: Direct Run
Extract the project
Open folder
Double-click index.html


✅ Method 2: VS Code (Recommended)
Open project in VS Code
Install Live Server Extension
Right-click index.html
Click "Open with Live Server"
🧠 Core Modules Explained
🔹 Scoring Engine

Calculates weighted scores for each decision option.

🔹 Ranking Engine

Sorts options based on calculated scores.

🔹 Risk Engine

Evaluates uncertainty or variability in decisions.

🔹 Confidence Engine

Determines reliability of the final result.

📊 UI Components
Input Panel → Add decision options
Weight Panel → Assign importance
Result Panel → Display ranked output
Chart Panel → Visual representation


📌 Use Cases
Career selection
Product comparison
Business strategy decisions
Investment choices
Personal decision-making


🔮 Future Enhancements
🔗 Backend integration (FastAPI / Node.js)
💾 Database storage
👤 User authentication
📤 Export results (PDF/Excel)
🤖 AI-based recommendations
