import React from "react";
import { Link } from "react-router-dom";
import "./MenuExtendedLayout.scss";

const MenuExtendedLayout = () => {
  return (
    <div className="menu-extended-layout">
      <div className="menu-list-options">
        <div className="menu-option">
        <Link to="/" className="menu-item">
          Inicio
        </Link>
        </div>
        <div className="menu-option">
        <Link to="/products" className="menu-item">
          Productos
        </Link>
        </div>
        <div className="menu-option">
        <Link to="/blog/como-elegir-surfskate" className="menu-item">
          Como Elegir SurfSkate
        </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuExtendedLayout;
