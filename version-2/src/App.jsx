import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import SavedCountries from "./pages/SavedCountries";
// local files are backup incase API doesn't load
import localData from "./localData";

function App() {
  // state variable to store API data
  const [countries, setCountries] = useState([]);

  // API call. Using async so that each command waits for the action to be completed before moving on to next
  const countryApi = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cca3,borders`,
      );
      const data = await response.json();
      console.log("data", data);
      setCountries(data);
      // if API fails to load, countries data will be sourced from local js file
    } catch (error) {
      console.log("error:", error.message);
      setCountries(localData);
    }
  };

  // API runs once upon loading page with useEffect
  useEffect(() => {
    countryApi();
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

        <Routes>
          {/* linked up props to api data thats stored in "countries" state variable */}
          <Route path="/" element={<Home countriesData={countries} />} />
          <Route
            path="/CountryDetail/:countryName"
            element={<CountryDetail countriesData={countries} />}
          />
          <Route path="/SavedCountries" element={<SavedCountries countriesData={countries} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
