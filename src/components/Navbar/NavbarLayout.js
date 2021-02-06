import React, { useEffect, useRef, Fragment, useContext } from "react";
import { Link } from 'react-router-dom';
import BlackZoneLogo from "assets/BlackZone-logos_white.svg";
import MenuContext from "contexts/Menu/MenuContext";
import Menu from "./Menu";
import MenuExtendedLayout from "./MenuExtendedLayout";
import "./NavbarLayout.scss";
import useGAEventTracker from "hooks/useGAEventTracker";

const NavbarLayout = () => {
  const { isActive } = useContext(MenuContext);
  const navbarRef = useRef();
  const menuExtendedRef = useRef();
  const GAEventsTracker = useGAEventTracker("Navbar Links");

  useEffect(() => {
    navbarRef.current.scrollIntoView();
    if (isActive) {
      document.getElementById("body").style.overflowY = "hidden";
      menuExtendedRef.current.style.opacity = 1;
      
    } else {
      document.getElementById("body").style.overflowY = "visible";
    }
  }, [isActive, menuExtendedRef])

  return (
    <Fragment>
      <div className="navbar" ref={navbarRef}>
        <div className="nav-brand">
          <Link to="/" onClick={e => GAEventsTracker("InicioLogo")}>
            <img className="nav-logo"
              src={BlackZoneLogo}
              alt="BlackZone"
              width="100%"
              height="100%" />
          </Link>
        </div>
        <div className="nav-content">
          <Menu />
        </div>
      </div>
      { isActive && <MenuExtendedLayout ref={menuExtendedRef} />}
    </Fragment>
  );
};

export default NavbarLayout;