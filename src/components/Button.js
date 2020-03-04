import React from "react";
function Button(props) {
  return (
    <div className="col-xs-6 ">
      <button
        className="btn btn-dark "
        type="button"
        id="new-quote"
        onClick={props.onClick}
      >
        {props.nameButton}
      </button>
    </div>
  );
}
export default Button;
