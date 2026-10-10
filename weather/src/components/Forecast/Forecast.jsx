
import "./Forecast.css";

function getWeatherDescription(code) {
  if (code === 0) return "Clear sky";
  if ([1, 2, 3].includes(code)) return "Partly cloudy";
  if ([45, 48].includes(code)) return "Fog";
  if (code >= 51 && code <= 67) return "Drizzle or rain";
  if (code >= 71 && code <= 77) return "Snow";
  if (code >= 80 && code <= 82) return "Rain showers";
  if (code >= 95) return "Thunderstorm";
  return "Variable conditions";
}

function Forecast({ forecastData }) {
  if (!forecastData?.time) return null;

  return (
    <div className="forecast" id="forecast">
      <h2>5-Day Weather Forecast</h2>
      <div className="forecast-container">
        {forecastData.time.map((date, index) => (
          <div className="forecast-card" key={date}>
            <h3>
              {new Date(`${date}T12:00:00`).toLocaleDateString("en-IN", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </h3>
            <span className="empty-icon">🌤️</span>
            <h2>
              {Math.round(forecastData.temperature_2m_max[index])}°C
            </h2>
            <p>
              Low: {Math.round(forecastData.temperature_2m_min[index])}°C
            </p>
            <p className="weather-description">
              {getWeatherDescription(forecastData.weather_code[index])}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;

