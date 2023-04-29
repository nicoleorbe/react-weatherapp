import React from "react";

import cloudImage from "./images/cloud.png";
import rainImage from "./images/rain.png";
import snowImage from "./images/snow.png";
import lightningStormImage from "./images/lightning-storm.png";
import sunCloudRainImage from "./images/sun-cloud-rain.png";
import sunnyImage from "./images/sunny.png";
import hazeImage from "./images/haze.png";

const weatherIcons = {
  Clouds: cloudImage,
  Rain: rainImage,
  Snow: snowImage,
  Thunderstorm: lightningStormImage,
  Drizzle: sunCloudRainImage,
  Haze: hazeImage,
  Clear: sunnyImage,
};

export default function WeatherIcon(props) {
  let weatherMain = props.code;
  let image = weatherIcons[weatherMain];

  return <img src={image} alt="Forecast" className="img-fluid" />;
}
