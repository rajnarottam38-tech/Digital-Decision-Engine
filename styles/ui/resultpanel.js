export function renderResults(options) {
  const div = document.getElementById("resultPanel");

  div.innerHTML = `
    <div class="panel">
      <h2>Results</h2>
      ${options.map(o => `<p>${o.name} → ${o.score.toFixed(2)}</p>`).join("")}
    </div>
  `;
}