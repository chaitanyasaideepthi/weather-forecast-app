
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1>About Weather App</h1>
      <p>
        This Weather Forecast App helps users check current weather
        conditions and a 5-day forecast for any city.
      </p>

      <h2>Features</h2>
      <ul>
        <li>Search weather by city name</li>
        <li>View temperature, humidity, and wind speed</li>
        <li>Check the 5-day weather forecast</li>
        <li>Responsive design for mobile and desktop</li>
      </ul>
    </div>
  );
}

export default About;
