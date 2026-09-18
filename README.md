# Weather App

A simple, clean weather lookup app built with React. Search any city and get real-time weather conditions.

**[Live Demo](https://weather-app-five-brown-32.vercel.app/)**

## Features

-  Search weather by city name
-  Displays temperature, wind speed, wind direction, and day/night status
-  Loading state with animated spinner during fetch
-  Error handling for invalid or unrecognized city names
-  Clean, responsive card-based UI with hover states and smooth transitions

## Tech Stack

- **React** (Vite)
- **Open-Meteo API** — free, no API key required
  - Geocoding endpoint to convert a city name into coordinates
  - Forecast endpoint to fetch current weather for those coordinates
- **Plain CSS** — no framework, custom design

## How It Works

1. User types a city name and clicks **Search**
2. App fetches matching coordinates from Open-Meteo's geocoding API
3. If no match is found, an error message displays and the search state resets
4. If a match is found, those coordinates are used to fetch current weather data
5. Results (temperature, wind, day/night) render in a styled card

## What I Learned

- Managing multiple pieces of related state together (`loading`, `weather`, `error`) and making sure all of them stay in sync — including resetting stale data after a failed search
- Chaining dependent API calls, where the second fetch relies on the result of the first
- Handling real-world API edge cases (a search with zero results doesn't throw an error — it just omits data, which needs to be checked for explicitly)
- Building conditional UI with nested ternaries to represent multiple distinct states (loading / error / empty / success)
- CSS animations (`@keyframes`) and transitions for a more polished feel

## Running Locally

```bash
git clone <your-repo-url>
cd weather-app
npm install
npm run dev
```

## Possible Future Improvements

- Weather icons based on conditions
- Enter-key support for search (not just clicking the button)
- 5-day forecast view
- Unit toggle (°C / °F)
