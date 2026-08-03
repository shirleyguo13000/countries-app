# 📝 Countries App README

## 📌 Project Description & Purpose

This project is an app that practices building APIs, creating database, rendering APIs and deploying a full stack app using various platforms. The app itself allows users to fill out a form to log in, view basic information about each country, and save or delete countries to show in a saved countries page.

## 🚀 Live Site

Here's the link to view the live app: (https://fancy-starship-815da9.netlify.app/)

## 🖼️ Screenshots

Here is where you'll include a screenshot of your project to show it off! 


## Here's a snapshot of the home page of the countries app
<img width="1423" height="777" alt="Screenshot 2026-08-02 at 7 49 09 PM" src="https://github.com/user-attachments/assets/4725f173-82d9-4ef5-8967-cba8814463dc" />


### Here's the 'Saved countries' page
<img width="1425" height="776" alt="Screenshot 2026-08-02 at 7 49 35 PM" src="https://github.com/user-attachments/assets/62fde824-662c-4f07-8329-475367127442" />



### Individual country card with more information about each country. In this case, we chose Algeria.
<img width="1440" height="777" alt="Screenshot 2026-08-02 at 7 49 59 PM" src="https://github.com/user-attachments/assets/97108cac-a8e4-4628-9eec-cddea80bd0b1" />

Instructions to include a screenshot into your README file: 

1. Use `Command + Control + Shift + 4` to take a screenshot of your site and copy the screenshot to your clipboard 
2. Find your Github `README.md` file on the Github website
3. Edit the site by clicking on the Pencil icon on the top right of the page ✏️
4. Move your cursor to the position where you want to paste the screenshot, then paste it. Github will convert the pasted screenshot into an `<img>` tag
5. Select "Commit changes..." to save your changes 

## ✨ Features

This is what you can do on the app: 
- view all countries as a dynamic card
- interact with each country card by clicking into it
- view basic information on selected country
- save countries you like
- fill out a form to render your desired username on "saved countries" page
- view saved countries and remove/unsave unwanted countries

## 🛠️ Tech Stack

**Frontend**

- **Languages:** Javascript
- **Framework:** React
- **Deployment:** netlify

**Server/API**

- **Languages:** Javascript
- **Framework:** Express.js
- **Deployment:** Render

**Database**

- **Languages:** PostgreSQL
- **Deployment:** Neon db

## 🔹 API Documentation

These are the API endpoints I built: 
1. /get-newest-user
2. /get-all-users
3. /get-all-saved-countries
4. /add-one-user
5. /update-one-country-count
6. /save-one-country

Here's the link to the full API documentation: (https://github.com/ac-backend/countries-app-instructions/blob/main/version-3/api-documentation.md)

## 🗄️ Database Schema

Here’s the SQL I used to create my tables:  

```sql
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  country_name VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  bio VARCHAR NOT NULL
  );

  CREATE TABLE saved_countries (
  saved_country_id SERIAL PRIMARY KEY,
  country_name VARCHAR UNIQUE NOT NULL
  );

  CREATE TABLE country_counts (
  country_count_id SERIAL PRIMARY KEY,
  country_name VARCHAR UNIQUE NOT NULL,
  count INTEGER NOT NULL
  );
```

## 💭 Reflections

**What I learned:** So much!!! From how to better render APIs in frontend to storing data, linking frontend with backend, to deploying a full stack app!

**What I'm proud of:** Building this whole thing on my own

**What challenged me:** Mainly the front end, especially with rendering the API correctly and looping through the data

**Future ideas for how I'd continue building this project:** 
1. Add a login feature so users feel like they're entering an account instead of submitting a form
2. Store the save countries data separately for each user so it is tailored to each account and the countries they've saved
3. Link external sites for more information of each country

## 🙌 Credits & Shoutouts 

If you used any resources for inspiration, tutorials, or documentation, you can mention them here.
You can also give a shoutout to anyone who helped you along the way.

Shoutout to Phil! Thank you so much for helping all of us learn how to build a fullstack app!

