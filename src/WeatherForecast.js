import React from "react";

import "./Weather.css";
//import image from "./images/cloud.png";

export default function WeatherCurrent(props) {
  return (
    <div className="WeatherForecast">
      <div className="forecast row mt-4 shadow text-center align-items-center">
        <span className="forecast-date">
          <strong>Mon</strong>
        </span>
        <img src="" alt="Forecast" className="forecast-icon img-fluid" />

        <ul className="text-center">
          <li className="forecast-temperature border">
            {" "}
            <strong> 19°</strong>
          </li>
          <li className="forecast-description border">Mostly Cloudy</li>
          <li>
            <span className="forecast-temp-high">24° /</span>{" "}
            <span className="forecast-temp-low"> 12°</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
