import React, { useState } from "react";
import Reset from "./Reset";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form
        className="row mb-3 search-bar"
        id="search-bar"
        onSubmit={handleSubmit}
      >
        <div className="col-5 input-city">
          <input
            type="search"
            className="form-control"
            id="search-city"
            placeholder="Enter a city"
            onChange={updateCity}
          />
        </div>
        <div className="col-2 btn-search">
          <button className="btn" type="submit" id="button-search">
            Search
          </button>
        </div>
        <div className="col-5 btn-current">
          <Reset />
        </div>
      </form>
    </div>
  );
}
