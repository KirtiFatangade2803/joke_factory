import React from "react";
import Logo from "./Logo.jpg";
import './Header.css';

function Header() {
  return (
    <>
      <div className="nav_section">
        <div className="nav_left">
          <img className="logo_img" src={Logo} alt="Logo2" />
        </div>

        <div className="nav_center">
        <i className="searchicon fa-solid fa-magnifying-glass"> 
            <input
              type="text"
              placeholder=" Search jokes ..."
              className="search"
            />
          </i>
        </div>

      </div>
    </>
  );
}
export default Header;
