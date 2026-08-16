// Small display helpers for the economic numbers. Kept separate from the fetching
// code so each file does one job.

// 30769700000000 -> "$30.8T". Raw GDP figures are unreadable on a card.
export function formatGdp(value) {
  if (typeof value !== "number") return "Not available";

  if (value >= 1e12) return `$${(value / 1e12).toFixed(1)}T`;
  if (value >= 1e9) return `$${(value / 1e9).toFixed(1)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(1)}M`;
  return `$${Math.round(value).toLocaleString()}`;
}

// Per-person figures are small enough to show in full, e.g. "$90,027"
export function formatPerCapita(value) {
  if (typeof value !== "number") return "Not available";
  return `$${Math.round(value).toLocaleString()}`;
}

// "1 USD = 147.24 JPY"
export function formatExchangeRate(rate, currencyCode) {
  if (typeof rate !== "number" || !currencyCode) return "Not available";

  // Show more decimal places for currencies worth more than a dollar, or the
  // number rounds away to something useless like "1.00"
  const decimals = rate < 10 ? 2 : 0;
  return `1 USD = ${rate.toFixed(decimals)} ${currencyCode}`;
}
