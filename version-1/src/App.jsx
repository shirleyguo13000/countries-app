import "./App.css";
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';
import SavedCountries from './pages/SavedCountries';
import localData from './localData';


function App() {
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
        <Route path="/" element={ <Home countriesData={localData} />} />
          <Route path="/CountryDetail" element={<CountryDetail />} />
          <Route path="/SavedCountries" element={<SavedCountries />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
