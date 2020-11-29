import React, { Fragment, useContext } from "react";
import { Link } from 'react-router-dom';
import BlackZoneLogo from "../../assets/BlackZone-logos_white.png";
import MenuContext from "../../contexts/Menu/MenuContext";
import Menu from "./Menu/Menu";
import MenuExtendedLayout from "./MenuExtendedLayout/MenuExtendedLayout";
import "./NavbarLayout.scss";
import useGAEventTracker from "../../hooks/useGAEventTracker";

const NavbarLayout = () => {
  const { isActive } = useContext(MenuContext);
  const GAEventsTracker = useGAEventTracker("Internal Links");
  
  window.addEventListener('scroll', () => {
    let navbar = document.getElementById("navbar");
    if (window.pageYOffset >= 1) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });

  if (isActive) {
    document.getElementById("body").style.overflowY = "hidden";
  } else {
    document.getElementById("body").style.overflowY = "visible";
  }

  return (
    <Fragment>
      <div className="navbar" id="navbar">
        <div className="nav-brand">
          <Link to="/" onClick={e => GAEventsTracker("InicioLogo")}>
            <img className="nav-logo" src={BlackZoneLogo} alt="BlackZone" />
          </Link>
        </div>
        <div className="nav-content">
          <Menu />
        </div>
      </div>
      {isActive && <MenuExtendedLayout />}
    </Fragment>
  );
};

export default NavbarLayout;