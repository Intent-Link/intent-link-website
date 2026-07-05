/** Pure formatting helpers. */

const formatMs = (ms: number): string => {
  return `${Math.round(ms)}ms`;
};

const formatPercent = (fraction: number): string => {
  return `${Math.round(fraction * 100)}%`;
};

export { formatMs, formatPercent };
