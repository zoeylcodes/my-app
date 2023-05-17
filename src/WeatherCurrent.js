import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import Weatherinfo from "./Weatherinfo";

import WeatherForecastComponent from "./WeatherForecast"; // Rename the import statement
import "./Weather.css";

export default function WeatherCurrent() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleResponse = (response) => {
    setWeatherData({
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
    setLoading(false);
  };

  const findLocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const apiKey = "49b631c45785fe73d2a88477803dea22";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

      axios.get(apiUrl).then(handleResponse);
    });
  };

  return (
    <div>
      {!weatherData ? (
        <input
          type="submit"
          value="Current"
          className="btn btn-primary w-100 me-2 mb-2 mb-sm-0"
          onClick={findLocation}
          disabled={loading}
        />
      ) : (
        <div>
          <Weatherinfo data={weatherData} />
          <br />
          <WeatherForecastComponent coordinates={weatherData.coordinates} />
        </div>
      )}
    </div>
  );
}
