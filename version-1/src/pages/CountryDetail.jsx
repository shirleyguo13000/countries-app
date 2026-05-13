import { useParams } from "react-router-dom";

function CountryDetail({countriesData}) {
    const countryName = useParams().countryName;
    return (
        <div>country detail</div>
    )
}

export default CountryDetail;