import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetail({ countriesData }) {
  const countryName = useParams().countryName;
  // .find() to help match API data to the country that is clicked on
  const country = countriesData.find(
    (c) => c.names.common.toLowerCase() === countryName.toLowerCase(),
  );
  // guard case to help prevent site from crashing while API is being fetched
  if (!country) return <p>Loading...</p>;

  // capitals is now an array of objects — pull out just the names
  const capitalNames = country.capitals?.map((c) => c.name).join(", ") || "N/A";

  return (
    <div>
      {/* linking back button to the home page */}
      <Link to="/">
        <button className="country-details-btn country-details-backbtn">
          Back
        </button>
      </Link>
      <div className="country-details-grid">
        <div className="country-details-child-grid1">
          <img
            src={country.flag.url_png}
            alt={country.flag.description || `Flag of ${country.names.common}`}
            className="country-details-img"
          />
        </div>
        {/* extra div for styling purposes */}
        <div className="country-details-child-grid2">
          <h1 className="country-details-h1">{country.names.common}</h1>
          <button className="country-details-btn">Save</button>
          <p className="country-details-p">Population: {country.population}</p>
          <p className="country-details-p">Capital: {capitalNames}</p>
          <p className="country-details-p">Region: {country.region}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
