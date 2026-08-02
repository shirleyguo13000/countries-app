import express from "express";
import pg from "pg";
import config from "./config.js";

const db = new pg.Pool({
  connectionString: config.databaseUrl,
  ssl: true,
});

const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// ---------------------------------
// Helper Functions
// ---------------------------------

// USERS

// 1. getNewestUser()
async function getNewestUser() {
  const result = await db.query("SELECT * FROM users ORDER BY id DESC LIMIT 1");
  return result.rows[0];
}

// 2. getAllUsers()
async function getAllUsers() {
  const result = await db.query("SELECT * FROM users");
  return result.rows;
}

// 3. addOneUser(name, countryName, email, bio)
async function addOneUser(name, countryName, email, bio) {
  await db.query(
    "INSERT INTO users (name, country_name, email, bio) VALUES ($1, $2, $3, $4)",
    [name, countryName, email, bio],
  );
}

// SAVED COUNTRIES

// 4. getAllSavedCountries()
async function getAllSavedCountries() {
  const result = await db.query("SELECT * FROM saved_countries");
  return result.rows;
}

// 5. saveOneCountry(countryName)
async function saveOneCountry(countryName) {
  await db.query("INSERT INTO saved_countries (country_name) VALUES ($1)", [
    countryName,
  ]);
}

// 6. unsaveOneCountry(countryName)
async function unsaveOneCountry(countryName) {
  await db.query("DELETE FROM saved_countries WHERE country_name = $1", [
    countryName,
  ]);
}

// COUNTRY COUNTS

// 7. updateOneCountryCount(countryName)
async function updateOneCountryCount(countryName) {
  const result = await db.query(
    `INSERT INTO country_counts (country_name, count)
     VALUES ($1, 1)
     ON CONFLICT (country_name)
     DO UPDATE SET count = country_counts.count + 1
     RETURNING count`,
    [countryName],
  );
  return result.rows[0];
}

// ---------------------------------
// API Endpoints
// ---------------------------------

// USERS

// 1. GET /get-newest-user
app.get("/get-newest-user", async (req, res) => {
  const user = await getNewestUser();
  res.json(user);
});

// 2. GET /get-all-users
app.get("/get-all-users", async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
});

// 3. POST /add-one-user
app.post("/add-one-user", async (req, res) => {
  const { name, country_name, email, bio } = req.body;
  await addOneUser(name, country_name, email, bio);
  res.send(`Success! User ${name} was added!`);
});

// SAVED COUNTRIES

// 4. GET /get-all-saved-countries
app.get("/get-all-saved-countries", async (req, res) => {
  const countries = await getAllSavedCountries();
  res.json(countries);
});

// 5. POST /save-one-country
app.post("/save-one-country", async (req, res) => {
  const { country_name } = req.body;
  await saveOneCountry(country_name);
  res.send(`Success! ${country_name} was saved!`);
});

// 6. POST /unsave-one-country
app.post("/unsave-one-country", async (req, res) => {
  const { country_name } = req.body;
  await unsaveOneCountry(country_name);
  res.send(`Success! ${country_name} was unsaved!`);
});

// COUNTRY COUNTS

// 7. POST /update-one-country-count
app.post("/update-one-country-count", async (req, res) => {
  const { country_name } = req.body;
  const updated = await updateOneCountryCount(country_name);
  res.send(`Success! ${country_name}'s count was updated to ${updated.count}!`);
});
