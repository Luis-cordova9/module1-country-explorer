# 🌍 Country Explorer

Country Explorer is a small web application that allows users to search and explore information about countries around the world using the **REST Countries API**.

The project is built with **Vanilla TypeScript, HTML5, and Tailwind CSS**, focusing on clean architecture, DOM manipulation, and API consumption without using frameworks.

---

# 🚀 Features

### 🔎 Country Search

Users can search for countries by name and retrieve basic information such as:

* Country flag
* Name
* Region
* Capital
* Population
* Languages

The search is powered by the **REST Countries API**.

---

### 🌎 Region Filter

Users can filter results by geographic region:

* Africa
* Americas
* Asia
* Europe
* Oceania

This helps narrow down results when exploring countries.

---

### ❤️ Favorites System

Users can mark countries as favorites using a heart icon on each country card.

Features included:

* Toggle favorite on/off
* Visual feedback (filled or outlined heart)
* Favorites stored locally
* Favorites persist after page reload
* Option to filter only favorites
* Option to clear all favorites

Favorites are stored in the browser using **localStorage**.

---

# 🧠 Architecture Overview

The project follows a **simple modular architecture** separating responsibilities between UI, logic, and data persistence.

```
UI (HTML + Components)
        │
        ▼
Application Logic (main.ts)
        │
        ▼
Storage Utilities (storage.ts)
        │
        ▼
Browser localStorage
```

### Main Layers

**Components**

* Render UI elements
* Handle user interactions on cards

**Application Logic (main.ts)**

* Controls UI state
* Handles search logic
* Applies filters
* Manages rendering

**Utilities**

* Helper functions for DOM
* Local storage management

---

# 📁 Project Structure

```
src/
│
├── components/
│   ├── CountryCard.ts
│   └── CountryModal.ts
│
├── services/
│   └── countryApi.ts
│
├── utils/
│   ├── dom.ts
│   └── storage.ts
│
├── types/
│   └── country.ts
│
└── main.ts
```

---

# ❤️ Favorites System (Implementation)

Favorites are handled through a **storage utility module** that interacts with the browser's localStorage.

Example storage structure:

```
localStorage

favoriteCountries:
["ESP", "MEX", "ARG"]
```

### Key Functions

**Get favorites**

```ts
getFavorites()
```

Returns the list of saved favorite country codes.

---

**Toggle favorite**

```ts
toggleFavorite(countryCode)
```

Adds a country to favorites if it is not already saved, or removes it if it exists.

---

**Check if favorite**

```ts
isFavorite(countryCode)
```

Used by the UI to determine if the heart icon should be filled or outlined.

---

**Clear favorites**

```ts
clearFavorites()
```

Removes all favorite countries from storage.

---

# 🔄 Application Flow

```
User searches for a country
        │
        ▼
REST Countries API request
        │
        ▼
Results rendered as Country Cards
        │
        ▼
User clicks heart icon
        │
        ▼
toggleFavorite() updates localStorage
        │
        ▼
UI updates to reflect favorite status
```

Favorites remain stored even after refreshing the page.

---

# 🛠 Technologies Used

* **HTML5**
* **Tailwind CSS**
* **TypeScript (Vanilla)**
* **REST Countries API**
* **localStorage**

---

# 📦 How to Run the Project

1. Install dependencies

```
npm install
```

2. Start development server

```
npm run dev
```

3. Open the project in your browser.

---

# 🎯 Learning Objectives

This lab focuses on practicing:

* Semantic HTML structure
* TypeScript without frameworks
* Fetch API and async requests
* DOM manipulation
* Modular architecture
* LocalStorage persistence
* UI state management

---

# 📡 API Reference

Data provided by:

https://restcountries.com

---

# 📄 License

This project was created for educational purposes.

# Navegador 
se utilizo brave para provar la web 

# Video 

https://youtu.be/9qQQ3eXGZJU