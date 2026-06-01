import CountryCard from "../components/CountryCard";

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
        />
      ))}
    </div>
  );
}

export default Home;
