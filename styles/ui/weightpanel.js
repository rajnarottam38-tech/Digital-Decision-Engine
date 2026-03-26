import { decisionData } from "../data/decisionModel.js";

export function renderWeightPanel() {
  const div = document.getElementById("resultPanel");

  div.innerHTML = `
    <div class="panel">
      <h2>Criteria Importance</h2>

      Cost:
      <input type="range" min="0" max="1" step="0.05"
        value="${decisionData.weights.cost}"
        onchange="updateWeight('cost', this.value)">

      Growth:
      <input type="range" min="0" max="1" step="0.05"
        value="${decisionData.weights.growth}"
        onchange="updateWeight('growth', this.value)">

      Risk:
      <input type="range" min="0" max="1" step="0.05"
        value="${decisionData.weights.risk}"
        onchange="updateWeight('risk', this.value)">

      Time:
      <input type="range" min="0" max="1" step="0.05"
        value="${decisionData.weights.time}"
        onchange="updateWeight('time', this.value)">

      Stability:
      <input type="range" min="0" max="1" step="0.05"
        value="${decisionData.weights.stability}"
        onchange="updateWeight('stability', this.value)">
    </div>
  `;

  window.updateWeight = (key, value) => {
    decisionData.weights[key] = parseFloat(value);
  };
}renderWeightPanel();

