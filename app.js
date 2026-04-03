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

  if (!cost || cost < 1 || cost > 10)         return shake(document.getElementById("cost"));
  if (growth === "" || growth < 0 || growth > 100) return shake(document.getElementById("growth"));
  if (!risk)                                   return shake(document.getElementById("risk"));
  if (!time || time < 0.5 || time > 30)        return shake(document.getElementById("time"));
  if (!stability || stability < 1 || stability > 10) return shake(document.getElementById("stability"));

  const riskLabel = { 2: "Low", 5: "Medium", 8: "High", 10: "Critical" };

  const option = {
    name,
    cost,
    growth,           // raw %
    growthNorm: growth / 10,  // normalized to ~0-10 scale
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
      Cost ${option.cost} · Growth ${option.growth}% · Risk ${option.riskLabel} · Time ${option.time}yr · Stability ${option.stability}
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
    score: opt.cost * weights.cost +
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

  document.getElementById("resultsSection").scrollIntoView({ behavior: "smooth" });
}

function shake(el) {
  el.style.animation = "none";
  el.offsetHeight; // reflow
  el.style.animation = "shake 0.3s ease";
  el.addEventListener("animationend", () => el.style.animation = "", { once: true });
}
