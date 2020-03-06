import React from "react";

function QuotesBox(props) {
  return (
    <div className=" mb-4 text-light">
      <div className="text-center text-large" id="text">
        <h5 className="font-italic">{props.quote}</h5>
      </div>
      <small className=" d-block text-right " id="author">
        - {props.author}
      </small>
    </div>
  );
}
export default QuotesBox;
