import React from "react";

function Square(props) {
  return (
    <button
      type="button"
      class="btn btn-outline-primary"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default Square;
