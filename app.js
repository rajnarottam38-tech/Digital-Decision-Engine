let options = [];

function updateLabel(slider, labelId) {
  document.getElementById(labelId).textContent = parseFloat(slider.value).toFixed(2);
}

function addOption() {
  const name = document.getElementById("name").value.trim();
  if (!name) return shake(document.getElementById("name"));

  const fields = ["cost", "growth", "risk", "time", "stability"];
  const option = { name };

  for (const f of fields) {
    const val = +document.getElementById(f).value;
    if (!val || val < 1 || val > 10) return shake(document.getElementById(f));
    option[f] = val;
  }

  options.push(option);
  renderOptionTag(option);

  // Clear inputs
  document.getElementById("name").value = "";
  fields.forEach(f => document.getElementById(f).value = "");
}

function renderOptionTag(option) {
  const list = document.getElementById("optionsList");
  const div = document.createElement("div");
  div.className = "option-tag";
  div.innerHTML = `
    <span class="tag-name">${option.name}</span>
    <span class="tag-scores">
      Cost ${option.cost} · Growth ${option.growth} · Risk ${option.risk} · Time ${option.time} · Stability ${option.stability}
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
    score: opt.cost * weights.cost +
           opt.growth * weights.growth -
           opt.risk * weights.risk +
           opt.time * weights.time +
           opt.stability * weights.stability
  })).sort((a, b) => b.score - a.score);

  const maxScore = results[0].score;
  empty.style.display = "none";
  ul.innerHTML = "";

  results.forEach((r, i) => {
    const pct = maxScore > 0 ? (r.score / maxScore) * 100 : 0;
    const li = document.createElement("li");
    li.className = `result-item${i === 0 ? " rank-1" : ""}`;
    li.innerHTML = `
      <div class="result-meta">
        <div>
          <div class="result-rank">#${i + 1}</div>
          <div class="result-name">${r.name}</div>
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
