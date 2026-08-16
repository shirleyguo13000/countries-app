import localData from "../localData";

// countries.dev needs no API key and returns every country in a single response,
// so there is no pagination loop to write here.
const COUNTRIES_URL = "https://countries.dev/countries";

// Returns the full list of countries. If the network call fails for any reason
// we fall back to the offline copy in localData.js, which uses the exact same
// field names, so nothing downstream has to care which source it got.
export async function fetchAllCountries() {
  try {
    const response = await fetch(COUNTRIES_URL);

    if (!response.ok) {
      throw new Error(`countries.dev responded with ${response.status}`);
    }

    const data = await response.json();

    // Guard against a successful response that isn't the array we expect
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("countries.dev returned an unexpected response");
    }

    return data;
  } catch (error) {
    console.log("Falling back to local country data:", error.message);
    return localData;
  }
}
