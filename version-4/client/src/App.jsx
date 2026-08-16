import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import SavedCountries from "./pages/SavedCountries";
import { fetchAllCountries } from "./utils/fetchAllCountries";
import { fetchEconomicData, EMPTY_DATA } from "./utils/fetchEconomicData";

function App() {
  // state variable to store the country data
  const [countries, setCountries] = useState([]);
  // GDP and exchange rates, which come from separate APIs
  const [economicData, setEconomicData] = useState(EMPTY_DATA);
  // so the page can say "Loading" instead of flashing an empty grid
  const [loading, setLoading] = useState(true);

  // Runs once when the app loads. The two requests are independent, so they go
  // out at the same time rather than one after the other.
  useEffect(() => {
    const loadData = async () => {
      const [countryList, economics] = await Promise.all([
        fetchAllCountries(),
        fetchEconomicData(),
      ]);

      setCountries(countryList);
      setEconomicData(economics);
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/" className="link1">
                  Where in the World?
                </Link>
              </li>
              <li>
                <Link to="/SavedCountries" className="link2">
                  Saved Countries
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {loading ? (
          <p className="loading-message">Loading countries...</p>
        ) : (
          <Routes>
            {/* linked up props to the country data stored in state */}
            <Route
              path="/"
              element={
                <Home countriesData={countries} economicData={economicData} />
              }
            />
            <Route
              path="/CountryDetail/:countryName"
              element={
                <CountryDetail
                  countriesData={countries}
                  economicData={economicData}
                />
              }
            />
            <Route
              path="/SavedCountries"
              element={<SavedCountries countriesData={countries} />}
            />
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;
