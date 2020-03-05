import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faSeedling} />;
function Header(props) {
  return (
    <div>
      <div className="text-center text-light">
        <i>{element}</i>
      </div>

      <h4 className="text-center text-light">{props.title}</h4>
    </div>
  );
}
export default Header;
