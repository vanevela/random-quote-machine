import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const element = <FontAwesomeIcon icon={faTwitterSquare} />;
function TwitterShare(props) {
  return (
    <div>
      <a
        href={`https://twitter.com/intent/tweet?text= ${props.quote} ${props.author}`}
        id="tweet-quote"
        target="_blanck"
        title="Post this quote on Twitter"
      >
        <i>{element}</i>
      </a>
    </div>
  );
}
export default TwitterShare;
