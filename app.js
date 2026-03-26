let options = [];

function addOption() {
  const option = {
    name: document.getElementById("name").value,
    cost: +document.getElementById("cost").value,
    growth: +document.getElementById("growth").value,
    risk: +document.getElementById("risk").value,
    time: +document.getElementById("time").value,
    stability: +document.getElementById("stability").value
  };

  if (!option.name) {
    alert("Enter option name");
    return;
  }

  options.push(option);
  alert("Option Added");
}

function calculate() {
  const weights = {
    cost: +document.getElementById("wCost").value,
    growth: +document.getElementById("wGrowth").value,
    risk: +document.getElementById("wRisk").value,
    time: +document.getElementById("wTime").value,
    stability: +document.getElementById("wStability").value
  };

  const results = options.map(opt => {
    const score =
      opt.cost * weights.cost +
      opt.growth * weights.growth -
      opt.risk * weights.risk +
      opt.time * weights.time +
      opt.stability * weights.stability;

    return { name: opt.name, score };
  });

  results.sort((a, b) => b.score - a.score);

  const ul = document.getElementById("result");
  ul.innerHTML = "";

  results.forEach((r, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${r.name} → Score: ${r.score.toFixed(2)}`;
    ul.appendChild(li);
  });
}
