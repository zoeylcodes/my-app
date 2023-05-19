import React from "react";
import FormattedDate from "./FormattedDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <React.Fragment>
      <div className="float-left">
        <div className="overview">
          <h1>{props.data.city}</h1>
          <ul className="float-left ml-0">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature text-shadow">
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <FontAwesomeIcon icon={faDroplet} />{" "}
              <span className="label-text">Humidity </span>{" "}
              <span className="ml-3">
                <strong>{Math.round(props.data.humidity)}</strong> %
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faWind} />{" "}
              <span className="label-text">Wind </span>{" "}
              <span className="ml-3">
                <strong>{Math.round(props.data.wind)}</strong> km/h
              </span>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
