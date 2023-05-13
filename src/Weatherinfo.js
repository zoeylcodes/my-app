import React from "react";
import FormattedDate from "./formattedDate";
import ReactAnimatedWeather from "react-animated-weather";

import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <React.Fragment>
      <div className="overview">
        <h1>{props.data.city}</h1>
        <ul className="float-left">
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>

            <div className="float-left">
              <strong>{Math.round(props.data.temperature)}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {Math.round(props.data.humidity)} %</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}