import { Link } from 'react-router-dom';
import "../App.css";

function CountryCard({ country }) {
    console.log("data from country",country);
    return (
        <Link to={`/CountryDetail/${country.name.common}`}>
            <img src={country.flags.png} alt="flag" className="country-card-img" />
            <div className="country-card-lowerhalf">
            <h3 className="country-card-h3">{country.name.common}</h3>
            <p className="country-card-p">Population: {country.population}</p>
            <p className="country-card-p">Capital: {country.capital}</p>
            <p className="country-card-p">Region: {country.region}</p>
            </div>
    </Link >
    )
}

export default CountryCard;