import { useState } from "react";

function SavedCountries() {
  const [savedCountries, setSavedCountries] = useState();

  // a function to fetch all saved countries to display when user is logged in
  const getSavedCountries = async () => {
    const response = await fetch("/api/get-all-saved-countries");
    const data = await response.json();
  };

  return (
    <div className="saved-countries-div">
      <h1 className="saved-countries-h1">My Saved Countries</h1>
      <form className="saved-countries-form">
        <h2>My Profile</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Country" />
        <input type="text" placeholder="Bio" className="bio-input" />
        <button type="submit" className="saved-countries-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SavedCountries;
