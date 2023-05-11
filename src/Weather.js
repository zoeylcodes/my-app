import React, { useState } from "react";
import "./Weather.css";

import Weatherinfo from "./Weatherinfo";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const forecastData = [
    {
      day: "Monday",
      description: "Showers",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/rain.png",
      forecasted: "10|5",
    },
    {
      day: "Tuesday",
      description: "Sunny",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      forecasted: "16|7",
    },
    {
      day: "Wednesday",
      description: "Cloudy",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      forecasted: "14|5",
    },
    {
      day: "Thursday",
      description: "Thunderstorm",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/thunderstorms.png",
      forecasted: "11|13",
    },
    {
      day: "Friday",
      description: "Snow",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/snow.png",
      forecasted: "20|10",
    },
  ];

  function search() {
    const apiKey = "e22ed9083fe0fa0dbcc4f7e384978903";

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
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="Weather">
          <form className="mb-3" onSubmit={handleSubmit}>
            <div className="row mx-auto">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control w-90"
                  autoComplete="off"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-sm-3 d-flex justify-content-center justify-content-sm-end mt-2 mt-sm-0 mx-auto">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100 me-2 mb-2 mb-sm-0"
                />
                <input
                  type="submit"
                  value="Current"
                  className="btn btn-primary w-100 me-2 mb-2 mb-sm-0"
                />
              </div>
            </div>
          </form>
          <Weatherinfo data={weatherData} />
        </div>
        <br />
        <div className="Forecast">
          <div className="row justify-content-center text-center">
            {forecastData.map((day) => (
              <div className="col" key={day.day}>
                <div className="card h-100 " style={{ width: "10rem" }}>
                  <img
                    src={day.imgUrl}
                    alt={day.description}
                    className="img-fluid mx-auto text-center"
                  />
                  <div className="card-body text-center ">
                    <h5 className="card-title text-center">{day.forecasted}</h5>
                    <h5 className="card-title text-center">{day.day}</h5>
                    <p className="card-text text-center">{day.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
