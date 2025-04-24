import React from "react";
import "./WeatherForecastEach.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastEach(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="forecast-wrapper shadow text-center">
      <div className="forecast-date">
        <strong>{day()}</strong>
      </div>
      <div className="day-icon text-center">
        <WeatherIcon code={props.data.weather[0].main} />
        {/* <img src="" alt="Forecast" className="forecast-icon img-fluid border" /> */}
      </div>
      <div className="weather-forecast-info text-center">
        <div className="forecast-temperature">
          {" "}
          <strong>{Math.round(props.data.temp.day)}°</strong>
        </div>
        <div className="forecast-description">
          {props.data.weather[0].description}
        </div>
        <div>
          <span className="forecast-temp-high">{maxTemperature()}° /</span>{" "}
          <span className="forecast-temp-low"> {minTemperature()}°</span>
        </div>
      </div>
    </div>
  );
}
