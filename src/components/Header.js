import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
const element = <FontAwesomeIcon icon={faQuoteLeft} />;

function Header(props) {
  return (
    <div>
      <h3 className="text-center text-light">{props.title}</h3>
      <div className="text-center text-light">
        <i>{element}</i>
      </div>
    </div>
  );
}
export default Header;
