import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  let forecastData = [
    {
      day: "Monday",
      description: "Showers",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/rain.png",
    },
    {
      day: "Tuesday",
      description: "Sunny",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    },
    {
      day: "Wednesday",
      description: "Cloudy",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    },
    {
      day: "Thursday",
      description: "Thunderstorm",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/thunderstorms.png",
    },
    {
      day: "Friday",
      description: "Snow",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/snow.png",
    },
  ];

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>Toronto</h1>
        <ul className="float-left">
          <li>Last updated: Sunday 10:00</li>
          <li>Cloudy</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
              className="float-left img-fluid mx-auto"
            />
            <div className="float-left">
              <strong>19</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 80%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
      </div>

      <br />

      <div className="Forecast">
        <div className="row">
          {forecastData.map((day) => (
            <div className="col" key={day.day}>
              <div className="card" style={{ width: "11rem" }}>
                <img
                  src={day.imgUrl}
                  alt={day.description}
                  className="img-fluid mx-auto text-center"
                />
                <div className="card-body text-center bg-transparent ">
                  <h5 className="card-title text-center">{day.day}</h5>
                  <p className="card-text text-center">{day.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />

      <div className="footer text-center">
        <a
          href="https://github.com/zoeylcodes/my-app"
          target="_blank"
          rel="noreferrer"
        >
          Open source
        </a>{" "}
        code by Zoey Leyoussi✨
      </div>
    </div>
  );
}
