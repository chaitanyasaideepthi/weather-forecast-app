
import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  if (!weatherData) {
    return (
      <div className="weather-card empty-weather">
        <span className="empty-icon">🌤️</span>
        <h2>Weather Information</h2>
        <p>Search for a city to see the current weather.</p>
      </div>
    );
  }

  return (
    <div className="weather-card">
      <h2>{weatherData.name}, {weatherData.country}</h2>
      <span className="empty-icon">🌤️</span>
      <h1 className="temperature">
        {Math.round(weatherData.temperature)}°C
      </h1>
      <p className="weather-condition">
        Weather code: {weatherData.weatherCode}
      </p>

      <div className="weather-details">
        <div className="weather-detail">
          <span>💧</span>
          <p>Humidity</p>
          <h3>{weatherData.humidity}%</h3>
        </div>
        <div className="weather-detail">
          <span>💨</span>
          <p>Wind Speed</p>
          <h3>{weatherData.windSpeed} km/h</h3>
        </div>
        <div className="weather-detail">
          <span>🌡️</span>
          <p>Feels Like</p>
          <h3>{Math.round(weatherData.feelsLike)}°C</h3>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;

