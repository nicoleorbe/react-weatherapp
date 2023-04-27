import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherCurrent from "./WeatherCurrent";
import WeatherForecast from "./WeatherForecast";

export default function Search(props) {
  let [city, setCity] = useState(props.city);
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature({
      temperature: Math.round(response.data.main.temp),
      feels: Math.round(response.data.main.feels_like),
      max: Math.round(response.data.main.temp_max),
      min: Math.round(response.data.main.temp_min),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      clouds: response.data.clouds.all,
      displayCity: response.data.name,
      coordinates: response.data.coord,
      //date: new Date(data.data.dt * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=91f6bf18ce54b4e6a35e4e6af54b2317`;
    axios.get(url).then(showTemperature);
  }

  function showPosition(position) {
    const latitude = position.coords.latitude;
    if (latitude) {
      let url = `https://api.ipgeolocation.io/ipgeo?apiKey=e9d4cfe75eda49729ab3361d039e85a9`;
      axios.get(url).then((data) => {
        city = data.data.city;
        search();
      });
    } else search();
  }

  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleMyLocation(event) {
    event.preventDefault();
    getCurrentLocation();
  }

  let form = (
    <div className="Weather mt-5">
      <div className="row mb-4">
        <div className="col-md-8">
          {/* <form onSubmit={handleSubmit}> */}
          <form>
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
                <button
                  className="btn"
                  type="submit"
                  onClick={handleSubmit}
                  id="button-search"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-4 border">
          <button
            className="btn border"
            type="submit"
            onClick={handleMyLocation}
            id="button-find"
          >
            My location
          </button>
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
            <form>
              {/* <form onSubmit={handleSubmit}> */}
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
                  <button
                    className="btn"
                    type="submit"
                    onClick={handleSubmit}
                    id="button-search"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>{" "}
          </div>
          <div className="col-md-4 border">
            <button
              className="btn border"
              type="submit"
              onClick={handleMyLocation}
              id="button-find"
            >
              My location
            </button>
          </div>
        </div>
        {/* row 2 - temperature*/}
        <WeatherCurrent data={temperature} />

        {/*row 3 forecast */}
        <WeatherForecast data={temperature.coordinates} />
      </div>
    );
  } else {
    getCurrentLocation();
    //search();
    return form;
  }
}
