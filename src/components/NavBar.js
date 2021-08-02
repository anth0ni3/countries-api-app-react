import React, { useContext } from "react";
import { ThemeContext } from "../store/Theme.context";

const NavBar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  console.log("Navbar Rendered");
  return (
    <nav className="navbar p sh">
      <div className="navbar-logo">
        <h3>Where in the world?</h3>
      </div>
      <div className="navbar-button" onClick={toggleTheme}>
        <div className="navbar-button-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <g className="nc-icon-wrapper">
              <path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"/>
            </g>
          </svg>
        </div>
        Dark Mode
      </div>
    </nav>
  );
};

export default NavBar;
