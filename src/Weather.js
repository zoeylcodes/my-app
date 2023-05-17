import React, { useState } from "react";
import "./Weather.css";
import Weatherinfo from "./Weatherinfo";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import WeatherForecast from "./WeatherForecast";
import WeatherCurrent from "./WeatherCurrent";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "49b631c45785fe73d2a88477803dea22";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}
`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="Weather">
          <form className="mb-3" onSubmit={handleSubmit}>
            <div className="row mx-auto">
              <div className="col-md-9">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control w-90"
                  autoComplete="off"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-md-3 col-sm-12 d-flex justify-content-center justify-content-sm-end mt-2 mt-sm-0 mx-auto">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100 me-2 mb-2 mb-sm-0"
                />
                <WeatherCurrent />
              </div>
            </div>
          </form>
          <Weatherinfo data={weatherData} />
          <br />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
        <br />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
