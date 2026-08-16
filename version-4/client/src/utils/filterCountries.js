import { getClimate, formatClimate } from "./getClimate";
import { CLIMATE_ZONES } from "../data/climateData";

// Only one filter can be active at a time. That is a deliberate design choice:
// "sort by population" and "sort by GDP" are both sorts, and two sorts can't both
// win. Allowing exactly one active filter means there is never a conflict to
// resolve, and the list on screen always has one obvious explanation.
//
// The active filter is a single object: { type, value }

export const NO_FILTER = { type: "none", value: null };

export const FILTER_TYPES = [
  { value: "none", label: "No filter (A–Z)" },
  { value: "continent", label: "Continent" },
  { value: "population", label: "Population" },
  { value: "climate", label: "Climate" },
  { value: "wealth", label: "Wealth" },
];

export const POPULATION_OPTIONS = [
  { value: "high", label: "Highest to lowest" },
  { value: "low", label: "Lowest to highest" },
];

export const CLIMATE_OPTIONS = CLIMATE_ZONES.map((zone) => ({
  value: zone,
  label: formatClimate(zone),
}));

export const WEALTH_OPTIONS = [
  { value: "gdp-high", label: "GDP total: highest first" },
  { value: "gdp-low", label: "GDP total: lowest first" },
  { value: "capita-high", label: "GDP per person: highest first" },
  { value: "capita-low", label: "GDP per person: lowest first" },
  { value: "rate-strong", label: "Strongest currency vs USD" },
  { value: "rate-weak", label: "Weakest currency vs USD" },
];

// The continent list is read out of the data rather than hardcoded, so it can
// never drift out of step with what the API actually returns. (countries.dev has
// eight regions, not the usual six — Polar, Antarctic and Antarctic Ocean each
// hold a single entry.)
export function getContinentOptions(countries) {
  const regions = [...new Set(countries.map((c) => c.region).filter(Boolean))];
  return regions
    .sort((a, b) => a.localeCompare(b))
    .map((region) => ({ value: region, label: region }));
}

// When the filter type changes we need a sensible starting value for the new type
export function getDefaultValue(type, countries) {
  if (type === "continent") return getContinentOptions(countries)[0]?.value ?? null;
  if (type === "population") return POPULATION_OPTIONS[0].value;
  if (type === "climate") return CLIMATE_OPTIONS[0].value;
  if (type === "wealth") return WEALTH_OPTIONS[0].value;
  return null;
}

function byName(a, b) {
  return a.name.localeCompare(b.name);
}

// Builds a sort comparator for a numeric field. Countries with no value always
// go to the end rather than being treated as zero — a missing GDP figure means
// "we don't know", not "this economy is worth nothing".
function byNumber(getValue, direction) {
  return (a, b) => {
    const aValue = getValue(a);
    const bValue = getValue(b);

    const aMissing = typeof aValue !== "number";
    const bMissing = typeof bValue !== "number";

    if (aMissing && bMissing) return byName(a, b);
    if (aMissing) return 1;
    if (bMissing) return -1;
    if (aValue === bValue) return byName(a, b);

    return direction === "high" ? bValue - aValue : aValue - bValue;
  };
}

// Looks up the exchange rate for a country's first listed currency
function getRate(country, exchangeRates) {
  const code = country.currencies?.[0]?.code;
  return code ? exchangeRates[code] : undefined;
}

// The one function that turns the full country list into what appears on screen.
// It is pure — same inputs always give the same output, and the original array is
// never modified — which makes it easy to reason about and easy to test.
export function filterCountries(countries, filter, economicData) {
  const { gdpTotal = {}, gdpPerCapita = {}, exchangeRates = {} } = economicData || {};
  const { type, value } = filter || NO_FILTER;

  // Copy before sorting: Array.sort() rearranges the array it is given, and that
  // array is React state
  const list = [...countries];

  if (type === "continent") {
    return list.filter((c) => c.region === value).sort(byName);
  }

  if (type === "climate") {
    return list.filter((c) => getClimate(c) === value).sort(byName);
  }

  if (type === "population") {
    return list.sort(byNumber((c) => c.population, value));
  }

  if (type === "wealth") {
    if (value === "gdp-high" || value === "gdp-low") {
      const direction = value === "gdp-high" ? "high" : "low";
      return list.sort(byNumber((c) => gdpTotal[c.alpha3Code], direction));
    }

    if (value === "capita-high" || value === "capita-low") {
      const direction = value === "capita-high" ? "high" : "low";
      return list.sort(byNumber((c) => gdpPerCapita[c.alpha3Code], direction));
    }

    // A "strong" currency buys more per dollar, which means *fewer* units per
    // US dollar — so strongest first is a low-to-high sort on the rate
    const direction = value === "rate-strong" ? "low" : "high";
    return list.sort(byNumber((c) => getRate(c, exchangeRates), direction));
  }

  // "none", or anything unrecognised, falls back to plain alphabetical order
  return list.sort(byName);
}

// Tells the country card which extra number to show, based on what is being
// filtered. Returns null when the card should stay as it is.
export function getDisplayMetric(filter) {
  if (filter?.type !== "wealth") return null;
  if (filter.value?.startsWith("gdp")) return "gdp";
  if (filter.value?.startsWith("capita")) return "capita";
  return "rate";
}

// Plain-English description of the active filter, shown above the grid
export function describeFilter(filter) {
  const { type, value } = filter || NO_FILTER;

  if (type === "continent") return `in ${value}`;
  if (type === "climate") return `with a ${value} climate`;
  if (type === "population") {
    const option = POPULATION_OPTIONS.find((o) => o.value === value);
    return `sorted by population, ${option?.label.toLowerCase()}`;
  }
  if (type === "wealth") {
    // keep the label's own capitalisation so it reads "GDP", not "gdp"
    const option = WEALTH_OPTIONS.find((o) => o.value === value);
    return `sorted by ${option?.label}`;
  }
  return "in alphabetical order";
}
