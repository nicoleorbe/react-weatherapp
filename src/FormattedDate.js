import React from "react";

export default function FormattedDate(props) {
  let date = new Date();
  let weekdayOptions = { weekday: "long" };
  let timeOptions = { timeStyle: "short", hour12: true };
  let weekday = date.toLocaleString("en-US", weekdayOptions);
  let time = date.toLocaleString("en-US", timeOptions);
  let formattedDate = `${weekday}, ${time}`;

  console.log(formattedDate);

  //   let days = [
  //     "Sunday",
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //   ];
  //   let day = days[props.date.getDay()];
  //   let hours = props.date.getHours();
  //   if (hours > 12) {
  //     hours = hours - 12;
  //   }

  //   let minutes = props.date.getMinutes();
  //   if (minutes < 10) {
  //     minutes = `0${minutes}`;
  //   }
  return <div>{formattedDate}</div>;
}
