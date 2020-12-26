import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-link">
          <a href="/" className="no-decoration">Home</a>
        </div>
        <div className="navbar-link">
          <a href="/">About Us</a>
        </div>
        <div className="navbar-link">
          <a href="/">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
