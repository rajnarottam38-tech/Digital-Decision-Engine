import { decisionData } from "../data/decisionModel.js";

export function renderInputPanel() {
  const div = document.getElementById("inputPanel");

  div.innerHTML = `
    <div class="panel">
      <h2>Add Decision Option</h2>

      <input id="name" placeholder="Option Name">
      <input id="cost" placeholder="Cost (1-10)">
      <input id="growth" placeholder="Growth (1-10)">
      <input id="risk" placeholder="Risk (1-10)">
      <input id="time" placeholder="Time (1-10)">
      <input id="stability" placeholder="Stability (1-10)">

      <button id="addBtn">Add Option</button>

      <h3>Added Options:</h3>
      <ul id="optionsList"></ul>
    </div>
  `;

  document.getElementById("addBtn").onclick = addOption;
}

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

  decisionData.options.push(option);
  renderList();
}

function renderList() {
  const ul = document.getElementById("optionsList");
  ul.innerHTML = "";

  decisionData.options.forEach(opt => {
    const li = document.createElement("li");
    li.textContent = `${opt.name} | Cost:${opt.cost} Growth:${opt.growth}`;
    ul.appendChild(li);
  });
}
