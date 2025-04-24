import React, { useState } from "react";

export default function Background() {
  let [background, setBackground] = useState("white");
  let sunrise =
    "linear-gradient(75.2deg, rgb(41, 196, 255) -2.5%, rgb(255, 158, 211) 55%, rgb(255, 182, 138) 102.3%)";
  let sunset =
    "linear-gradient(75.2deg, rgb(255, 182, 138) 2.5%, rgb(255, 158, 211) 44.8%, rgb(41, 196, 255) 102.3%)";
  let daytime =
    "linear-gradient(109.6deg, rgb(204, 228, 247) 11.2%, rgb(237, 246, 250) 100.2%)";
  let evening = "linear-gradient(to top, #09203f 0%, #537895 100%)";

  let date = new Date();
  let time = date.getHours();

  if (time >= 21 || time <= 4) {
    setBackground(evening);
  } else if (time >= 5 && time <= 7) {
    setBackground(sunrise);
  } else if (time >= 17 && time <= 20) {
    setBackground(sunset);
  } else {
    setBackground(daytime);
  }

  setBodyColor({ color: `${background}` });

  console.log(background);

  return <main>...</main>;
}
