import React from "react";
import "./SquareTwo.css";

function SquareTwo({ propKey, clickFunc, style, height, width, isActive }) {
  return (
    <button
      key={propKey}
      height={height}
      width={width}
      type="button"
      className="btn-square1"
      style={style}
      onClick={event => {
        clickFunc(event, propKey);
      }}
    >
      {isActive}
    </button>
  );
}

export default SquareTwo;
