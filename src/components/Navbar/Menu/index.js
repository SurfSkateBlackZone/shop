import React, { useContext } from "react";
import './style.scss'
import MenuIcon from "assets/icons/menu.svg";
import MenuContext from "contexts/Menu/MenuContext";
import "./style.scss";

const Menu = () => {
  const {openMenu} = useContext(MenuContext);

  return (
    <div className="menu">
      <button onClick={openMenu}>
        <img src={MenuIcon} alt="" />
      </button>
    </div>
  );
};

export default Menu;
