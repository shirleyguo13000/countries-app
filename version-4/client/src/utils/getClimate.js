import CLIMATE_OVERRIDES from "../data/climateData";

// Works out one broad climate zone for a country.
//
// Step 1: if the country is in the override list, trust that (see climateData.js
//         for why the list exists).
// Step 2: otherwise fall back to latitude bands. Distance from the equator is a
//         decent rough guide to temperature, and every country in the dataset has
//         coordinates.
export function getClimate(country) {
  if (!country) return null;

  const override = CLIMATE_OVERRIDES[country.alpha3Code];
  if (override) return override;

  // A couple of entries have no coordinates at all, so we say "unknown" rather
  // than guessing. Those cards simply won't match any climate filter.
  const latitude = country.latlng?.[0];
  if (typeof latitude !== "number") return null;

  const distanceFromEquator = Math.abs(latitude);

  if (distanceFromEquator < 23.5) return "tropical"; // inside the tropics
  if (distanceFromEquator < 50) return "temperate"; // mild middle latitudes
  if (distanceFromEquator < 66.5) return "continental"; // cold winters, warm summers
  return "polar"; // inside the polar circles
}

// Capitalised version for displaying on a card, e.g. "tropical" -> "Tropical"
export function formatClimate(climate) {
  if (!climate) return "Not available";
  return climate.charAt(0).toUpperCase() + climate.slice(1);
}
