import React from "react";
import "./SquareOne.css";

function SquareOne(props) {
  return (
    <button
      key={props.propKey}
      type="button"
      className="btn-square1"
      onClick={props.onClick}
    >
      {props.propKey}

      {props.value}
    </button>
  );
}

export default SquareOne;