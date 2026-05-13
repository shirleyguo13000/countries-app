import "./App.css";
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';
import SavedCountries from './pages/SavedCountries';
import localData from './localData';


function App() {
  const [countries, setCountries] = useState([]);


   const countryApi = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cca3,borders`
      );
      const data = await response.json();
      console.log('data', data);
      setCountries(countryApi);
    } catch (error) {
      console.log('error:', error.message);
    }
   };
  
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
            <Link  to="/" className="link1">Where in the World?</Link>
          </li>
          <li>
            <Link  to="/SavedCountries" className="link2">Saved Countries</Link>
              </li>
            </ul>
            </nav>
        </header>
        
     
   
      <Routes>
        <Route path="/" element={ <Home countriesData={countries} />} />
          <Route path="/CountryDetail/:countryName" element={<CountryDetail countriesData={countries}/>} />
          <Route path="/SavedCountries" element={<SavedCountries />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
