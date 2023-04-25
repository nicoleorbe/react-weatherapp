import React from "react";
import FeelsLike from "./FeelsLike";
import TempMax from "./TempMax";
import TempMin from "./TempMin";
import Wind from "./Wind";
import Humidity from "./Humidity";
import "./WeatherDetails.css";

export default function WeatherDetails() {
  return (
    <div className="WeatherDetails">
      <div className="row mb-4 mt-2 justify-content-evenly text-center weather-details">
        <div className="col-6">
          <div className="row">
            <FeelsLike />
            <TempMax />
            <TempMin />
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <Wind />
            <Humidity />
          </div>
        </div>
      </div>
    </div>
  );
}
