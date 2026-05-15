function SavedCountries() {
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
