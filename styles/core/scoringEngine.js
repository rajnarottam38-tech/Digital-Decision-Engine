export function calculateScore(option, weights) {
  return (
    option.cost * weights.cost +
    option.growth * weights.growth -
    option.risk * weights.risk +
    option.time * weights.time +
    option.stability * weights.stability
  );
}
