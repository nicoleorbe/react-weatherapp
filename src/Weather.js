import React from "react";
import "./Weather.css";
import image from "./images/cloud.png";

export default function Weather() {
  return (
    <div className="Weather mt-5">
      <div className="row mb-4">
        <div className="col-md-8">
          <form action="">
            <div className="row">
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a city..."
                ></input>
              </div>
              <div className="col-md-4">
                <button className="btn" type="submit" id="button-search">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-4 border">
          <button className="btn border" type="submit" id="button-find">
            My location
          </button>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6 border">
          <h1 className="border m-0">Pottsboro</h1>
        </div>
        <div className="col-md-6 border">
          <ul>
            <li className="current-date border">Wednesday 7:45pm</li>
          </ul>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-4 border icon">
          <img
            src={image}
            alt="Current Weather"
            className="weather-icon img-fluid"
          />
        </div>
        <div className="col-md-4 border text-center current-temp">
          <ul>
            <li className="temperature border">19°</li>
            <li className="description border">Mostly Cloudy</li>
            <li>
              <span className="temp-high ">
                <strong> H</strong> 24°
              </span>
              {"  "}
              <span className="temp-low">
                {"  "}
                <strong>L</strong> 12°
              </span>
            </li>
          </ul>
        </div>
        <div className="col-md-4 border weather-details">
          <ul>
            <li className="feels-like">
              <strong> Feels Like: 15°</strong>
            </li>
            <li>Precipitation: 15%</li>
            <li>Humidity: 15%</li>
            <li>Wind: 1 mph</li>
          </ul>
        </div>
      </div>
      <div className="forecast row mt-4 shadow text-center align-items-center">
        <span className="forecast-date">
          <strong>Mon</strong>
        </span>
        <img src={image} alt="Forecast" className="forecast-icon img-fluid" />

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
