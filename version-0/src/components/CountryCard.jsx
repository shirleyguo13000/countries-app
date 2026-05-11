
function CountryCard({dataFromLocalFile}) {
    return (
        <div className="country-card">
            <img src={dataFromLocalFile.flags.png} alt="flag" className="country-card-img" />
            <div className="country-card-lowerhalf">
            <h3 className="country-card-h3">{dataFromLocalFile.name.common}</h3>
            <p className="country-card-p">Population: {dataFromLocalFile.population}</p>
            <p className="country-card-p">Capital: {dataFromLocalFile.capital}</p>
            <p className="country-card-p">Region: {dataFromLocalFile.region}</p>
            </div>
        </div>
    )
}

export default CountryCard;