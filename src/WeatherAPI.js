import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import image from "./images/cloud.png";

export default function Weather(props) {
  // let [city, setCity] = useState(props.city);
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    console.log(response);
    console.log(response.data.name);
    setTemperature({
      temperature: Math.round(response.data.main.temp),
      feels: Math.round(response.data.main.feels_like),
      max: Math.round(response.data.main.temp_max),
      min: Math.round(response.data.main.temp_min),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      clouds: response.data.clouds.all,
      displayCity: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=91f6bf18ce54b4e6a35e4e6af54b2317`;
    axios.get(url).then(showTemperature);
    console.log(url);
  }

  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude);

    if (latitude) {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=91f6bf18ce54b4e6a35e4e6af54b2317`;
      axios.get(url).then((data) => {
        // search(data.coord.name);
        console.log(url);
      });
    } else search("Dallas");
  }

  function getCurrentLocation() {
    // Check if geolocation is supported by the browser
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  let form = (
    <div className="Weather mt-5">
      <div className="row mb-4">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-8">
                <input
                  type="text"
                  onChange={updateCity}
                  className="form-control"
                  placeholder="Enter a city..."
                  id="search-input"
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
      </div>
    </div>
  );

  if (temperature) {
    return (
      <div className="Weather mt-5">
        <div className="row mb-4">
          <div className="col-md-8">
            {" "}
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-8">
                  <input
                    type="text"
                    onChange={updateCity}
                    className="form-control"
                    placeholder="Enter a city..."
                    id="search-input"
                  ></input>
                </div>
                <div className="col-md-4">
                  <button className="btn" type="submit" id="button-search">
                    Search
                  </button>
                </div>
              </div>
            </form>{" "}
          </div>
          <div className="col-md-4 border">
            <button className="btn border" type="submit" id="button-find">
              My location
            </button>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 border">
            <h1 className="border m-0">{city}</h1>
          </div>
          <div className="col-md-6 border">
            <ul>
              <li className="current-date border"> </li>
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
              <li className="temperature border">{temperature.temperature}°</li>
              <li className="description border">{temperature.description}</li>
              <li>
                <span className="temp-high ">
                  <strong> H</strong> {temperature.max}°
                </span>
                {"  "}
                <span className="temp-low">
                  {"  "}
                  <strong>L</strong> {temperature.min}°
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-4 border weather-details">
            <ul>
              <li className="feels-like">
                <strong> Feels Like: {temperature.feels}°</strong>
              </li>
              <li>Precipitation: 15%</li>
              <li>Humidity: {temperature.humidity}%</li>
              <li>Wind: {temperature.wind} mph</li>
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
  } else {
    getCurrentLocation();
    return form;
  }
}
