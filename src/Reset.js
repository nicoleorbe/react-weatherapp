import React from "react";

export default function Reset() {
  return (
    <div className="Reset">
      <button
        className="btn btn-mylocation"
        onclick="resetPage()"
        id="button-reset"
      >
        My Weather
      </button>
    </div>
  );
}
