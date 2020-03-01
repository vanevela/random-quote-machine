import React from "react";
function Button(props) {
  return (
    <button id="new-quote" onClick={props.onClick}>
      {props.nameButton}
    </button>
  );
}
export default Button;
