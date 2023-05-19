import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="float-left">
        <strong>{Math.round(props.celsius)}</strong>
        <span className="units" style={{ color: "#ffea51" }}>
          °C |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="float-left text-muted">
        <strong>{Math.round(fahrenheit)}</strong>
        <span className="units" style={{ color: "#ffea51" }}>
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          |°F
        </span>
      </div>
    );
  }
}
