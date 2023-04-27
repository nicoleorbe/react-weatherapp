import React from "react";
import "./Weather.css";
import FormatDate from "./FormatDate";

export default function WeatherCurrent(props) {
  return (
    <div className="WeatherCurrent">
      <div className="row align-items-center">
        <div className="col-md-6 border">
          <h1 className="border m-0">{props.data.displayCity}</h1>
        </div>
        <div className="col-md-6 border">
          <ul>
            <li className="current-date border">
              {/* <FormatDate date={props.data.date} /> */}
            </li>
          </ul>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-4 border icon">
          <img
            src=""
            alt="Current Weather"
            className="weather-icon img-fluid"
          />
        </div>
        <div className="col-md-4 border text-center current-temp">
          <ul>
            <li className="temperature border">{props.data.temperature}°</li>
            <li className="description border">{props.data.description}</li>
            <li>
              <span className="temp-high ">
                <strong> H</strong> {props.data.max}°
              </span>
              {"  "}
              <span className="temp-low">
                {"  "}
                <strong>L</strong> {props.data.min}°
              </span>
            </li>
          </ul>
        </div>
        <div className="col-md-4 border weather-details">
          <ul>
            <li className="feels-like">
              <strong> Feels Like: {props.data.feels}°</strong>
            </li>
            <li>Precipitation: 15%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
