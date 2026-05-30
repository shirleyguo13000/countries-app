import { Link } from "react-router-dom";
import "../App.css";

function CountryCard({ country, getViewCount }) {
  // console.log("data from country",country);
  return (
    //  Dynamic router to make URL update according to country name in UI link
    <Link to={`/CountryDetail/${country.name.common}`}>
      {/* div for css styling */}
      <div className="country-card" onClick={() => getViewCount(country)}>
        <img
          src={country.flags.svg || country.flags.png}
          alt={country.flags.alt}
          className="country-card-img"
        />
        {/* div to style the words on the card */}
        <div className="country-card-lowerhalf">
          <h3 className="country-card-h3">{country.name.common}</h3>
          <p className="country-card-p">Population: {country.population}</p>
          <p className="country-card-p">Capital: {country.capital}</p>
          <p className="country-card-p">Region: {country.region}</p>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
