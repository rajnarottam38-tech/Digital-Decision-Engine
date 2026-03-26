export function rankOptions(options) {
  return options.sort((a, b) => b.score - a.score);
}
