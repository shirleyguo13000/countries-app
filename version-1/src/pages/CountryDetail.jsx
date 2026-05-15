import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetail({ countriesData }) {
  const countryName = useParams().countryName;
  const country = countriesData.find(
    (c) => c.name.common.toLowerCase() === countryName.toLowerCase(),
  );
  if (!country) return <p>Loading...</p>;
  return (
    <div>
      <Link to="/">
        <button className="country-details-btn country-details-backbtn">Back</button>
      </Link>
      <div className="country-details-grid">
        <div className="country-details-child-grid1">
          <img
            src={country.flags.png}
            alt={country.flags.alt}
            className="country-details-img"
          />
        </div>
        <div className="country-details-child-grid2">
          <h1 className="country-details-h1">{country.name.common}</h1>
          <button className="country-details-btn">Save</button>
          <p className="country-details-p">Population: {country.population}</p>
          <p className="country-details-p">Capital: {country.capital}</p>
          <p className="country-details-p">Region: {country.region}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
