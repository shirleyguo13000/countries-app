import "./App.css";
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';
import SavedCountries from './pages/SavedCountries';


function App() {
  return (
    <>
      <div>
        <header>
      <nav>
        <ul>
            <li>
            <Link  to="/" className="link" style={{color: 'black', fontWeight: '600', fontSize:'25px'}}>Where in the World?</Link>
          </li>
          <li>
            <Link  to="/SavedCount" className="link" style={{fontWeight: '400', color: 'black', fontSize:'13px', marginRight:'1rem'}}>Saved Countries</Link>
              </li>
            </ul>
            </nav>
            </header>
   
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/CountryDetail" element={<CountryDetail />} />
          <Route path="/SavedCountries" element={<SavedCountries />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
