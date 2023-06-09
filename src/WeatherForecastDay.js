import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div
        className="WeatherForecast-day text-center m-2 "
        style={{
          color: "azure",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        {day()}
      </div>
      <WeatherIcon code={props.data.weather[0].icon} size={40} />

      <div className="WeatherForecast-temperatures text-center">
        <span
          className="WeatherForecast-max "
          style={{
            fontWeight: "bold",
            color: "azure",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-space"></span>
        <span
          className="WeatherForecast-min "
          style={{
            color: "azure",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
