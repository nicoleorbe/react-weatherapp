import React from "react";
import "./CurrentWeather.css";
import DateTime from "./DateTime";
import City from "./City";
import Temperature from "./Temperature";
import WeatherImage from "./WeatherImage";
import WeatherWords from "./WeatherWords";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="row weather-detail-container text-center">
        <div className="col-sm-6">
          <div className="row">
            <div className="col-md-6 weather-date">
              <h1 className="weather-title">Weather</h1>
              <DateTime />
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            {/* city/temp */}
            <div className="col-6 current-city-temp">
              <City />
              <Temperature />
              <div className="degree-symbol">
                <a href="/" className="active" id="degree-F">
                  °F{" "}
                </a>
                |
                <a href="/" id="degree-C">
                  {" "}
                  °C
                </a>
              </div>
            </div>
            {/* weather */}
            <div className="col-6">
              <WeatherImage />
              <WeatherWords />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
