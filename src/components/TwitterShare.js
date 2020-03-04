import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const element = <FontAwesomeIcon icon={faTwitter} />;
function TwitterShare(props) {
  return (
    <div className="col-xs-6">
      <a
        href={`https://twitter.com/intent/tweet?text= ${props.quote} ${props.author}`}
        id="tweet-quote"
        target="_blanck"
        title="Post this quote on Twitter"
        className="btn btn-dark "
      >
        <i>{element}</i>
      </a>
    </div>
  );
}
export default TwitterShare;
