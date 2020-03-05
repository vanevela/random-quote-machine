import React from "react";
function Button(props) {
  return (
    <button
      className="btn btn-outline-light btn-sm "
      type="button"
      id="new-quote"
      onClick={props.onClick}
    >
      {props.nameButton}
    </button>
  );
}
export default Button;
