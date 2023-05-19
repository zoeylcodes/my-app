import React from "react";
import FormattedDate from "./FormattedDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import WeatherApp from "./WeatherApp";

export default function WeatherInfo(props) {
  return (
    <React.Fragment>
      <div className="float-left">
        <div className="overview">
          <ul>
            <li
              className="float-right"
              style={{
                color: "azure",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              {" "}
              <WeatherApp />
            </li>
          </ul>

          <h1>{props.data.city}</h1>
          <ul
            className="float-left ml-0 "
            style={{
              color: "azure",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            {" "}
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div
            className="clearfix weather-temperature"
            style={{
              color: "azure",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
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
            <li
              style={{
                color: "#0059CF",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              <FontAwesomeIcon icon={faDroplet} />{" "}
              <span
                className="label-text "
                style={{
                  color: "azure",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                Humidity{" "}
              </span>{" "}
              <span
                className="ml-3"
                style={{
                  color: "azure",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                <strong>{Math.round(props.data.humidity)}</strong> %
              </span>
            </li>
            <li
              style={{
                color: "#0059CF",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              <FontAwesomeIcon icon={faWind} />{" "}
              <span
                className="label-text"
                style={{
                  color: "azure",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                Wind{" "}
              </span>{" "}
              <span
                className="ml-3 "
                style={{
                  color: "azure",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                <strong>{Math.round(props.data.wind)}</strong> km/h
              </span>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
