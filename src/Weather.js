import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherCurrent from "./WeatherCurrent";
import WeatherForecast from "./WeatherForecast";
import { Code } from "react-content-loader";

export default function Search(props) {
  let [city, setCity] = useState(props.city);
  let [temperature, setTemperature] = useState({ ready: false });
  const MyLoader = () => (
    <Code speed={1} backgroundColor="#209bd7" foregroundColor="#fbe049" />
  );

  function handleResponse(response) {
    setTemperature({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      max: Math.round(response.data.main.temp_max),
      min: Math.round(response.data.main.temp_min),
      humidity: response.data.main.humidity,
      date: new Date(),
      //new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      mainWeather: response.data.weather[0].main,
      feels: Math.round(response.data.main.feels_like),
      wind: Math.round(response.data.wind.speed),
      windDirection: response.data.wind.deg,
      cloud: response.data.clouds.all,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (temperature.ready) {
    return (
      <div className="Weather mt-5">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn w-100"
                id="button-search"
              />
            </div>
          </div>
        </form>
        <WeatherCurrent data={temperature} />
        <WeatherForecast coordinates={temperature.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <div className="Weather mt-5">
        <div className="loader"> {MyLoader()}</div>{" "}
      </div>
    );
  }
}
