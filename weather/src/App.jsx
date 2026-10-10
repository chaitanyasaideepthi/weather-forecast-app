
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Forecast from "./components/Forecast/Forecast";
import About from "./components/About/About";

import {
  getWeatherByCity,
  getForecastByCity,
} from "./services/weatherApi";

function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(event) {
    event.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const [weather, forecast] = await Promise.all([
        getWeatherByCity(city.trim()),
        getForecastByCity(city.trim()),
      ]);

      setWeatherData(weather);
      setForecastData(forecast);
    } catch (err) {
      setError(err.message || "Unable to load weather. Try again.");
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="home-page">
      <h1>Weather Forecast</h1>
      <p>Search a city to check its weather.</p>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder="Enter city name..."
          aria-label="City name"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Search"}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      <WeatherCard weatherData={weatherData} />
      <Forecast forecastData={forecastData} />
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;






