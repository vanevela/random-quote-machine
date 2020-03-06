import React from "react";
function Button(props) {
  return (
    <button
      className="btn  btn-sm btn-outline-light "
      type="button"
      id="new-quote"
      onClick={props.onClick}
    >
      {props.nameButton}
    </button>
  );
}
export default Button;
