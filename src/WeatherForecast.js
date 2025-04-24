import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherForecastEach from "./WeatherForecastEach";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoaded(false);
    setError(null);

    const apiKey = process.env.REACT_APP_API_KEY; // Use environment variable
    const longitude = props.coordinates?.lon;
    const latitude = props.coordinates?.lat;
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=imperial`;

    axios
      .get(apiUrl)
      .then((response) => {
        setForecast(response.data.daily);
        setLoaded(true);
      })
      .catch((err) => {
        setError("Failed to load forecast data");
        setLoaded(true); // Allow UI to render even if there's an error
      });
  }, [props.coordinates]);

  if (!loaded) {
    return <div>Loading...</div>; // Show loading indicator
  }

  if (error) {
    return <div>{error}</div>; // Show error message
  }

  return (
    <div className="WeatherForecast">
      <div className="forecast row mt-4 text-center align-items-center">
        {forecast?.slice(0, 6).map((dailyForecast, index) => (
          <div className="col" key={dailyForecast.dt || index}>
            <WeatherForecastEach data={dailyForecast} />
          </div>
        ))}
      </div>
    </div>
  );
}
