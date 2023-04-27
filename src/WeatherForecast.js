import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function WeatherCurrent(props) {
  let [forecast, setForecast] = useState(null);

  function formatEpoch(timestamp) {
    let date = new Date(timestamp * 1000);

    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let weekday = weekdays[date.getDay()];

    return `${weekday}`;
  }

  function handleForecast(response) {
    setForecast(response.data.daily);
  }

  function search() {
    let latitude = props.data.lat;
    let longitude = props.data.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly&units=imperial&appid=281450ec88936f4fa8ee9864682b49a0`;
    axios.get(url).then(handleForecast);
  }

  if (props.coordinates) {
    return (
      <div className="WeatherForecast">
        <div className="forecast row mt-4 shadow text-center align-items-center">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <span className="forecast-date">
                    <strong>${formatEpoch(dailyForecast.dt)}</strong>
                  </span>
                  <img
                    src=""
                    alt="Forecast"
                    className="forecast-icon img-fluid"
                  />

                  <ul className="text-center">
                    <li className="forecast-temperature border">
                      {" "}
                      <strong>{Math.round(dailyForecast.temp.day)}°</strong>
                    </li>
                    <li className="forecast-description border">
                      {Math.round(dailyForecast.weather[index].description)}
                    </li>
                    <li>
                      <span className="forecast-temp-high">
                        {Math.round(dailyForecast.temp.max)}° /
                      </span>{" "}
                      <span className="forecast-temp-low">
                        {" "}
                        {Math.round(dailyForecast.temp.min)}°
                      </span>
                    </li>
                  </ul>
                </div>
              );
            } else {
              return null;
            }
          })}
          ;
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}
