import React from "react";
import "./Weather.css";

export default function WeatherForecastEach(props) {
  console.log(props);
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
      <span className="forecast-date">
        <strong>{day()}</strong>
      </span>
      <img src="" alt="Forecast" className="forecast-icon img-fluid" />

      <ul className="text-center">
        <li className="forecast-temperature border">
          {" "}
          <strong>{Math.round(props.data.temp.day)}°</strong>
        </li>
        <li className="forecast-description border">
          {Math.round(props.data.weather[0].description)}
        </li>
        <li>
          <span className="forecast-temp-high">
            {Math.round(props.data.temp.max)}° /
          </span>{" "}
          <span className="forecast-temp-low">
            {" "}
            {Math.round(props.data.temp.min)}°
          </span>
        </li>
      </ul>
    </div>
  );
}
