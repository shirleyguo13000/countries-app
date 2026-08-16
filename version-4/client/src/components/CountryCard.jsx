import { Link } from "react-router-dom";
import "../App.css";
import { getClimate, formatClimate } from "../utils/getClimate";
import {
  formatGdp,
  formatPerCapita,
  formatExchangeRate,
} from "../utils/formatEconomic";

// Works out the extra line to show when a wealth filter is active, so the number
// being sorted on is actually visible on the card
function getWealthLine(country, displayMetric, economicData) {
  if (!displayMetric) return null;

  const { gdpTotal = {}, gdpPerCapita = {}, exchangeRates = {} } =
    economicData || {};

  if (displayMetric === "gdp") {
    return `GDP: ${formatGdp(gdpTotal[country.alpha3Code])}`;
  }

  if (displayMetric === "capita") {
    return `GDP per person: ${formatPerCapita(gdpPerCapita[country.alpha3Code])}`;
  }

  const currencyCode = country.currencies?.[0]?.code;
  return formatExchangeRate(exchangeRates[currencyCode], currencyCode);
}

function CountryCard({ country, displayMetric, economicData }) {
  // Handle cases where country might be undefined
  if (!country) {
    return null;
  }

  // countries.dev gives the name and capital as plain strings, and a flags object
  // holding both an svg and a png version
  const countryName = country.name;
  const capital = country.capital || "N/A";
  const flagUrl = country.flags?.svg || country.flags?.png;
  const wealthLine = getWealthLine(country, displayMetric, economicData);

  return (
    //  Dynamic router to make URL update according to country name in UI link
    <Link to={`/CountryDetail/${countryName}`}>
      {/* div for css styling */}
      <div className="country-card">
        <img
          src={flagUrl}
          alt={`Flag of ${countryName}`}
          className="country-card-img"
        />
        {/* div to style the words on the card */}
        <div className="country-card-lowerhalf">
          <h3 className="country-card-h3">{countryName}</h3>
          <p className="country-card-p">
            Population: {country.population?.toLocaleString()}
          </p>
          <p className="country-card-p">Capital: {capital}</p>
          <p className="country-card-p">Region: {country.region}</p>
          <p className="country-card-p">
            Climate: {formatClimate(getClimate(country))}
          </p>
          {/* only appears while a wealth filter is active */}
          {wealthLine && <p className="country-card-p">{wealthLine}</p>}
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
