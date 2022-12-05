import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faImages, faHeart } from "@fortawesome/free-solid-svg-icons";

import "./Navigation.scss";
const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">
        <FontAwesomeIcon icon={faHome} />
      </NavLink>
      <NavLink to="/photoalbum">
        <FontAwesomeIcon icon={faImages} />
      </NavLink>
      <NavLink to="/favorite">
        <FontAwesomeIcon icon={faHeart} />
      </NavLink>
    </nav>
  );
};

export default Navigation;
