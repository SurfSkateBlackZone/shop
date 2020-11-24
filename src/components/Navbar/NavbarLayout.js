import React, { Fragment, useContext } from "react";
import { Link } from 'react-router-dom';
import BlackZoneLogo from "../../assets/BlackZone-logos_white.png";
import MenuContext from "../../contexts/Menu/MenuContext";
import Menu from "./Menu/Menu";
import MenuExtendedLayout from "./MenuExtendedLayout/MenuExtendedLayout";
import "./NavbarLayout.scss";

const NavbarLayout = () => {
  const { isActive } = useContext(MenuContext);
  return (
    <Fragment>
      <div className="navbar">
        <div className="nav-brand">
          <Link to="/">
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