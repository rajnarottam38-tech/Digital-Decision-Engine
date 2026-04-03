let options = [];

function updateLabel(slider, labelId) {
  document.getElementById(labelId).textContent = parseFloat(slider.value).toFixed(2);
}

function addOption() {
  const name = document.getElementById("name").value.trim();
  if (!name) return shake(document.getElementById("name"));

  const growth = +document.getElementById("growth").value;
  const time   = +document.getElementById("time").value;
  const cost   = +document.getElementById("cost").value;
  const risk   = +document.getElementById("risk").value;
  const stability = +document.getElementById("stability").value;

  if (!cost || cost <= 0)                      return shake(document.getElementById("cost"));
  if (growth === "" || growth < 0 || growth > 100) return shake(document.getElementById("growth"));
  if (!risk)                                   return shake(document.getElementById("risk"));
  if (!time || time < 0.5 || time > 30)        return shake(document.getElementById("time"));
  if (!stability || stability < 1 || stability > 10) return shake(document.getElementById("stability"));

  const riskLabel = { 2: "Low", 5: "Medium", 8: "High", 10: "Critical" };

  const option = {
    name,
    cost,
    costNorm: Math.min(10, cost / 1000),  // normalize: e.g. 5000 → 5, capped at 10
    growth,
    growthNorm: growth / 10,
    risk,
    riskLabel: riskLabel[risk],
    time,
    timeNorm: Math.max(1, 10 - time * 0.3), // shorter time = better score
    stability
  };

  options.push(option);
  renderOptionTag(option);

  document.getElementById("name").value = "";
  ["cost","growth","time","stability"].forEach(f => document.getElementById(f).value = "");
  document.getElementById("risk").selectedIndex = 0;
}

function renderOptionTag(option) {
  const list = document.getElementById("optionsList");
  const div = document.createElement("div");
  div.className = "option-tag";
  div.innerHTML = `
    <span class="tag-name">${option.name}</span>
    <span class="tag-scores">
      Cost $${option.cost.toLocaleString()} · Growth ${option.growth}% · Risk ${option.riskLabel} · Time ${option.time}yr · Stability ${option.stability}
    </span>
  `;
  list.appendChild(div);
}

function calculate() {
  const empty = document.getElementById("resultEmpty");
  const ul = document.getElementById("result");

  if (options.length === 0) {
    empty.style.display = "block";
    ul.innerHTML = "";
    return;
  }

  const weights = {
    cost:      +document.getElementById("wCost").value,
    growth:    +document.getElementById("wGrowth").value,
    risk:      +document.getElementById("wRisk").value,
    time:      +document.getElementById("wTime").value,
    stability: +document.getElementById("wStability").value
  };

  const results = options.map(opt => ({
    name: opt.name,
    riskLabel: opt.riskLabel,
    score: opt.costNorm * weights.cost +
           opt.growthNorm * weights.growth -
           opt.risk * weights.risk +
           opt.timeNorm * weights.time +
           opt.stability * weights.stability
  })).sort((a, b) => b.score - a.score);

  const maxScore = results[0].score;
  empty.style.display = "none";
  ul.innerHTML = "";

  const riskColor = { Low: "#22c55e", Medium: "#facc15", High: "#f97316", Critical: "#ef4444" };

  results.forEach((r, i) => {
    const pct = maxScore > 0 ? (r.score / maxScore) * 100 : 0;
    const li = document.createElement("li");
    li.className = `result-item${i === 0 ? " rank-1" : ""}`;
    li.innerHTML = `
      <div class="result-meta">
        <div>
          <div class="result-rank">#${i + 1}</div>
          <div class="result-name">${r.name}</div>
          <div class="result-risk" style="color:${riskColor[r.riskLabel]}">Risk: ${r.riskLabel}</div>
        </div>
        <div class="result-score">${r.score.toFixed(2)}</div>
      </div>
      <div class="score-bar-bg">
        <div class="score-bar-fill" style="width:${pct}%"></div>
      </div>
    `;
    ul.appendChild(li);
  });

  renderAIRecommendation(results, options);
  document.getElementById("resultsSection").scrollIntoView({ behavior: "smooth" });
}

function shake(el) {
  el.style.animation = "none";
  el.offsetHeight; // reflow
  el.style.animation = "shake 0.3s ease";
  el.addEventListener("animationend", () => el.style.animation = "", { once: true });
}

// ── AI Recommendation Engine ──
function renderAIRecommendation(results, rawOptions) {
  const existing = document.getElementById("aiBox");
  if (existing) existing.remove();

  const top = results[0];
  const topRaw = rawOptions.find(o => o.name === top.name);
  const insights = [];

  // Score gap analysis
  if (results.length > 1) {
    const gap = ((top.score - results[1].score) / top.score * 100).toFixed(0);
    insights.push(gap > 20
      ? `<strong>${top.name}</strong> is the clear winner with a ${gap}% score lead.`
      : `<strong>${top.name}</strong> edges out <strong>${results[1].name}</strong> by only ${gap}% — a close call.`
    );
  }

  // Risk warning
  if (topRaw.riskLabel === "Critical" || topRaw.riskLabel === "High")
    insights.push(`⚠️ Top option carries <strong>${topRaw.riskLabel}</strong> risk — consider a risk mitigation plan before proceeding.`);

  // Growth insight
  if (topRaw.growth >= 50)
    insights.push(`📈 Growth potential of <strong>${topRaw.growth}%</strong> is strong — good long-term pick.`);
  else if (topRaw.growth < 20)
    insights.push(`📉 Growth is only <strong>${topRaw.growth}%</strong> — may not be ideal if scaling is a priority.`);

  // Time insight
  if (topRaw.time > 10)
    insights.push(`⏳ Expected timeline of <strong>${topRaw.time} years</strong> is long — ensure resources are sustainable.`);
  else if (topRaw.time <= 2)
    insights.push(`⚡ Quick turnaround of <strong>${topRaw.time} year(s)</strong> — good for fast ROI.`);

  // Low score warning
  if (top.score < 1)
    insights.push(`🔍 All scores are low — consider revisiting your weights or option values.`);

  const box = document.createElement("div");
  box.id = "aiBox";
  box.className = "ai-box";
  box.innerHTML = `
    <div class="ai-header">🤖 AI Recommendation</div>
    <ul class="ai-insights">${insights.map(i => `<li>${i}</li>`).join("")}</ul>
  `;
  document.getElementById("resultsSection").appendChild(box);
}

// ── Backend Session API ──
const API = "http://127.0.0.1:8000";

async function saveSession() {
  const id = document.getElementById("sessionId").value.trim();
  if (!id) return document.getElementById("sessionMsg").textContent = "Enter a session name.";
  if (options.length === 0) return document.getElementById("sessionMsg").textContent = "No options to save.";

  const res = await fetch(`${API}/save`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ session_id: id, options })
  });
  const data = await res.json();
  document.getElementById("sessionMsg").textContent = data.status === "saved"
    ? `✅ Session "${id}" saved.`
    : "❌ Save failed.";
}

async function loadSession() {
  const id = document.getElementById("sessionId").value.trim();
  if (!id) return document.getElementById("sessionMsg").textContent = "Enter a session name.";

  const res = await fetch(`${API}/load/${id}`);
  const data = await res.json();

  if (data.error) return document.getElementById("sessionMsg").textContent = `❌ ${data.error}`;

  options = data.options.map(o => ({
    ...o,
    costNorm: Math.min(10, o.cost / 1000),
    growthNorm: o.growth / 10,
    riskLabel: { 2: "Low", 5: "Medium", 8: "High", 10: "Critical" }[o.risk] || "Medium",
    timeNorm: Math.max(1, 10 - o.time * 0.3)
  }));

  document.getElementById("optionsList").innerHTML = "";
  options.forEach(renderOptionTag);
  document.getElementById("sessionMsg").textContent = `✅ Session "${id}" loaded with ${options.length} option(s).`;
}
