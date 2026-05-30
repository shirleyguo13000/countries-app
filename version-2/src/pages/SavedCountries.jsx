import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
import App from "../App";

function SavedCountries({ countriesData }) {
  // holds the data of saved countries from FETCH
  const [savedCountries, setSavedCountries] = useState([]);
  // holds current state of controlled form
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    bio: "",
  });
  // holds new user's data
  const [newUserName, setNewUserName] = useState(null);
  // for conditional rendering of the welcome message
  const [submitted, setSubmitted] = useState(false);

  // getting newest user data through async await, use try... catch, fetch request
  const getUserNewestInfo = async () => {
    const response = await fetch("/api/get-newest-user");
    const data = await response.json();
    setNewUserName(data[0].name);
  };

  // Update the state when input values change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // store user data using API POST request
  const storeUserData = async (data) => {
    await fetch("/api/add-one-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.fullName,
        country_name: data.country,
        email: data.email,
        bio: data.bio,
      }),
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // function call for POST request here!
    storeUserData(formData);

    // reset the form to empty state
    setFormData({
      fullName: "",
      email: "",
      country: "",
      bio: "",
    });

    setSubmitted(true);
  };
  // fetching newest user info when we load the page
  useEffect(() => {
    getUserNewestInfo();
  }, []);

  // function to GET all saved countries to display when user loads saved countries page
  const getSavedCountries = async () => {
    const response = await fetch("/api/get-all-saved-countries");
    const data = await response.json();
    setSavedCountries(data);
    console.log(data);
  };

  // const handleClick = () => { };
  useEffect(() => {
    getSavedCountries();
  }, []);

  // matching the GET API data with the countries API data by using find array withn array method
  const savedCountriesLoop = savedCountries.map((name) => {
    return countriesData.find((item) => item.name.common === name.country_name);
  });

  return (
    <>
      <div className="saved-countries-div">
        <h1 className="saved-countries-h1">My Saved Countries</h1>
        <div className="grid-container">
          {savedCountriesLoop.map((country, index) => (
            <CountryCard
              key={country?.name?.common || index}
              country={country}
            />
          ))}
        </div>
        {submitted && <h1>Welcome, {newUserName}!</h1>}
        <form className="saved-countries-form">
          <h2>My Profile</h2>
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="country"
            className="saved-countries-select"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />

          <input
            type="text"
            placeholder="Bio"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="bio-input"
          />
          <button
            type="submit"
            className="saved-countries-btn"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default SavedCountries;
