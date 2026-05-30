import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetail({ countriesData }) {
  const countryName = useParams().countryName;
  // .find() to help match API data to the country that is clicked on
  const country = countriesData.find(
    (c) => c.name.common.toLowerCase() === countryName.toLowerCase(),
  );
  // guard case to help prevent site from crashing while API is being fetched
  if (!country) return <p>Loading...</p>;

  const storeSavedCountry = async () => {
    await fetch("/api/save-one-country", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ country_name: country.name.common }),
    });
  };

  const handleSave = () => {
    storeSavedCountry();
  };

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
            src={country.flags.png}
            alt={country.flags.alt}
            className="country-details-img"
          />
        </div>
        {/* extra div for styling purposes */}
        <div className="country-details-child-grid2">
          <h1 className="country-details-h1">{country.name.common}</h1>
          <button className="country-details-btn" onClick={handleSave}>
            Save
          </button>
          <p className="country-details-p">Population: {country.population}</p>
          <p className="country-details-p">Capital: {country.capital}</p>
          <p className="country-details-p">Region: {country.region}</p>
          <p className="country-details-p">Viewed: </p>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
