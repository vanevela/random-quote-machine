import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
const element = <FontAwesomeIcon icon={faQuoteLeft} />;

function Header(props) {
  return (
    <div className="text-dark">
      <h3 className="text-center ">{props.title}</h3>
      <div className="text-center ">
        <i id="faquote">{element}</i>
      </div>
    </div>
  );
}
export default Header;
