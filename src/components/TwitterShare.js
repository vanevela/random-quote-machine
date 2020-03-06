import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const element = <FontAwesomeIcon icon={faTwitter} />;
function TwitterShare(props) {
  return (
    <a
      href={`https://twitter.com/intent/tweet?text= ${props.quote} ${props.author}`}
      id="tweet-quote"
      target="_blanck"
      title="Post this quote on Twitter"
      className="btn btn-sm  btn-outline-light  d-flex align-items-center"
    >
      <i>{element}</i>
    </a>
  );
}
export default TwitterShare;
