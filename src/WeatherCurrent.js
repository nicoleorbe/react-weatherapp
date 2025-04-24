import React from "react";
import FormatDate from "./FormattedDate";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherCurrent(props) {
  return (
    <div className="WeatherCurrent">
      <div className="row align-items-center ">
        <div className="col-md-6 ">
          <h1 className=" m-0">{props.data.city}</h1>
        </div>
        <div className="col-md-6 ">
          <ul>
            <li className="current-date ">
              <FormatDate date={props.data.date} />
            </li>
          </ul>
        </div>
      </div>
      <div className="row align-items-center ">
        <div className="col-md-4 weather-icon ">
          <WeatherIcon code={props.data.mainWeather} />
        </div>

        <div className="col-md-4  text-center current-temp ">
          <ul>
            <li className="temperature ">{props.data.temperature}°</li>
            <li className="description ">{props.data.description}</li>
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
        <div className="col-md-4  weather-details ">
          <ul>
            <li className="feels-like">
              <strong> Feels Like: {props.data.feels}°</strong>
            </li>
            <li>Cloudiness: {props.data.cloud}%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
