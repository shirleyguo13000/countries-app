import { useState } from "react";
import CountryCard from "../components/CountryCard";
import FilterBar from "../components/FilterBar";
import {
  filterCountries,
  getDisplayMetric,
  NO_FILTER,
} from "../utils/filterCountries";

function Home({ countriesData, economicData }) {
  // The one active filter. Only one can be set at a time, so this is a single
  // object rather than one piece of state per filter.
  const [filter, setFilter] = useState(NO_FILTER);

  // All the filtering and sorting happens in one pure function
  const visibleCountries = filterCountries(countriesData, filter, economicData);

  // Tells each card whether to show a GDP / exchange rate line
  const displayMetric = getDisplayMetric(filter);

  return (
    <>
      <FilterBar
        filter={filter}
        onChange={setFilter}
        countries={countriesData}
        resultCount={visibleCountries.length}
        totalCount={countriesData.length}
      />

      {visibleCountries.length === 0 ? (
        <p className="no-results">
          No countries match that filter. Try another one.
        </p>
      ) : (
        <div className="grid-container">
          {visibleCountries.map((country) => (
            <CountryCard
              key={country.alpha3Code}
              country={country}
              displayMetric={displayMetric}
              economicData={economicData}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
