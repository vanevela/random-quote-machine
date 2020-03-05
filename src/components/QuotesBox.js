import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
const element = <FontAwesomeIcon icon={faQuoteLeft} />;
function QuotesBox(props) {
  return (
    <div className="text-light">
      <div className="text-center" id="text">
        <i>{element}</i>
        <span className="font-italic"> {props.quote}</span>
      </div>
      <div className="text-right" id="author">
        -<span>{props.author}</span>
      </div>
    </div>
  );
}
export default QuotesBox;
