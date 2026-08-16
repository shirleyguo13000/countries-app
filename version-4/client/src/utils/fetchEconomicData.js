// countries.dev has no economic data at all, so the wealth numbers come from two
// other free, no-key APIs:
//   - World Bank  -> GDP total and GDP per person
//   - open.er-api -> exchange rates against the US dollar
//
// Both are fetched once when the app loads and cached in localStorage for a day,
// because GDP figures only change once a year and refetching them on every page
// load would be wasted bandwidth.

const WORLD_BANK_URL = "https://api.worldbank.org/v2/country/all/indicator";
const EXCHANGE_RATES_URL = "https://open.er-api.com/v6/latest/USD";

const CACHE_KEY = "countries-app-economic-data";
const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

// The World Bank calls these "indicators" — each one is a different measure
const GDP_TOTAL = "NY.GDP.MKTP.CD"; // whole economy, in current US dollars
const GDP_PER_CAPITA = "NY.GDP.PCAP.CD"; // divided by population

// Turns one World Bank indicator into a plain { ABW: 3800000000, ... } lookup
// keyed by the same alpha3Code that countries.dev gives us.
async function fetchIndicator(indicatorId) {
  // mrnev=1 means "most recent non-empty value", so we get each country's latest
  // reported year instead of a long history
  const response = await fetch(
    `${WORLD_BANK_URL}/${indicatorId}?format=json&mrnev=1&per_page=400`,
  );

  if (!response.ok) {
    throw new Error(`World Bank responded with ${response.status}`);
  }

  // The World Bank wraps its results in a two-item array: [metadata, rows]
  const [, rows] = await response.json();

  const lookup = {};
  for (const row of rows || []) {
    if (row.countryiso3code && typeof row.value === "number") {
      lookup[row.countryiso3code] = row.value;
    }
  }
  // Region aggregates like "AFE" or "WLD" come back too, but they never match a
  // real country code so they are simply never looked up.
  return lookup;
}

// Returns { EUR: 0.86, JPY: 147.2, ... } — how many units of each currency one
// US dollar buys.
async function fetchExchangeRates() {
  const response = await fetch(EXCHANGE_RATES_URL);

  if (!response.ok) {
    throw new Error(`Exchange rate API responded with ${response.status}`);
  }

  const data = await response.json();
  return data.rates || {};
}

function readCache() {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const { savedAt, data } = JSON.parse(cached);
    if (Date.now() - savedAt > ONE_DAY_IN_MS) return null;

    return data;
  } catch {
    // A corrupt or unavailable cache should never break the page
    return null;
  }
}

function writeCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ savedAt: Date.now(), data }));
  } catch {
    // Private browsing modes can block localStorage — not worth failing over
  }
}

// The shape every caller gets back, even when everything fails. Empty lookups
// mean cards show "Not available" instead of the page breaking.
const EMPTY_DATA = { gdpTotal: {}, gdpPerCapita: {}, exchangeRates: {} };

export async function fetchEconomicData() {
  const cached = readCache();
  if (cached) return cached;

  // allSettled rather than all: if the exchange rate API is down we still want
  // the GDP numbers, and vice versa
  const results = await Promise.allSettled([
    fetchIndicator(GDP_TOTAL),
    fetchIndicator(GDP_PER_CAPITA),
    fetchExchangeRates(),
  ]);

  const [gdpTotal, gdpPerCapita, exchangeRates] = results.map((result) => {
    if (result.status === "fulfilled") return result.value;
    console.log("Economic data request failed:", result.reason?.message);
    return {};
  });

  const data = { gdpTotal, gdpPerCapita, exchangeRates };

  // Only cache a result that actually has something in it, so a bad network day
  // doesn't lock in empty data for 24 hours
  if (Object.keys(gdpTotal).length > 0) {
    writeCache(data);
  }

  return data;
}

export { EMPTY_DATA };
