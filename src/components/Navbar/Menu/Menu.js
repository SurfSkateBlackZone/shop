import React, { useContext } from "react";
import './Menu.scss'
import MenuIcon from "../../../assets/icons/menu.svg";
import MenuContext from "../../../contexts/Menu/MenuContext";
import "./Menu.scss";

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
