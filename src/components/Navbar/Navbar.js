import React from "react";
import { Link } from "react-router-dom";
import BlackZoneLogo from "../../assets/BlackZone-logos_white.png"
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-brand">
        <img className="nav-logo" src={BlackZoneLogo} alt="BlackZone"/>
      </div>
      <div className="nav-content">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/products" className="nav-item">Products</Link>
      </div>
    </div>
  );
};

export default Navbar;
