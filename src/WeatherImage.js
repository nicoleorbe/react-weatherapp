import React from "react";
import image from "./images/sunny.png";
export default function WeatherImage() {
  return (
    <div className="WeatherImage">
      <img
        className="img-current-temp"
        src={image}
        alt="Current Weather"
        id="img-current-temp"
      />
    </div>
  );
}
