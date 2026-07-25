import { Link } from "react-router-dom";
import "../App.css";

function CountryCard({ country, getViewCount }) {
  // Handle cases where country might be undefined
  if (!country) {
    return null;
  }

  const countryName = country.names.common;
  const capital = country.capitals?.[0]?.name || "N/A";

  return (
    //  Dynamic router to make URL update according to country name in UI link
    <Link to={`/CountryDetail/${countryName}`}>
      {/* div for css styling */}
      <div className="country-card">
        <img
          src={country.flag.url_svg || country.flag.url_png}
          alt={country.flag.description}
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
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
