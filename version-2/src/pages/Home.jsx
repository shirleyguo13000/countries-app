import CountryCard from "../components/CountryCard";
import { useState } from "react";

function Home({ countriesData }) {
  // new variable to sort data into alphabetical order
  const sortedCountries = [...countriesData].sort((a, b) =>
    a.name.common.localeCompare(b.name.common),
  );

  return (
    <div className="grid-container">
      {/* using alphabetically sorted variable of data to be looped through */}
      {sortedCountries.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
          getViewCount={getViewCount}
        />
      ))}
    </div>
  );
}

export default Home;
