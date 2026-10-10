
import axios from "axios";

const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

export async function getWeatherByCity(city) {
  const geoResponse = await axios.get(GEO_URL, {
    params: { name: city, count: 1, language: "en", format: "json" },
  });

  const place = geoResponse.data.results?.[0];

  if (!place) {
    throw new Error("City not found. Please enter a valid city name.");
  }

  const response = await axios.get(WEATHER_URL, {
    params: {
      latitude: place.latitude,
      longitude: place.longitude,
      current:
        "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m",
      timezone: "auto",
      forecast_days: 5,
    },
  });

  return {
    name: place.name,
    country: place.country,
    temperature: response.data.current.temperature_2m,
    humidity: response.data.current.relative_humidity_2m,
    feelsLike: response.data.current.apparent_temperature,
    windSpeed: response.data.current.wind_speed_10m,
    weatherCode: response.data.current.weather_code,
  };
}

export async function getForecastByCity(city) {
  const geoResponse = await axios.get(GEO_URL, {
    params: { name: city, count: 1, language: "en", format: "json" },
  });

  const place = geoResponse.data.results?.[0];

  if (!place) {
    throw new Error("City not found. Please enter a valid city name.");
  }

  const response = await axios.get(WEATHER_URL, {
    params: {
      latitude: place.latitude,
      longitude: place.longitude,
      daily:
        "weather_code,temperature_2m_max,temperature_2m_min",
      timezone: "auto",
      forecast_days: 5,
    },
  });

  return response.data.daily;
}

