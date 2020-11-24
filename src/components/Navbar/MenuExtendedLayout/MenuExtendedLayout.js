import React from "react";
import { Link } from "react-router-dom";
import "./MenuExtendedLayout.scss";
import useGAEventTracker from "../../../hooks/useGAEventTracker";

const MenuExtendedLayout = () => {
  const GAEventsTracker = useGAEventTracker("Internal Links");

  return (
    <div className="menu-extended-layout">
      <div className="menu-list-options">
        <div className="menu-option">
        <Link to="/" className="menu-item" onClick={e => GAEventsTracker("Inicio")}>
          Inicio
        </Link>
        </div>
        <div className="menu-option">
        <Link to="/products" className="menu-item" onClick={e => GAEventsTracker("Productos")}>
          Productos
        </Link>
        </div>
        <div className="menu-option">
        <Link to="/blog/como-elegir-surfskate" className="menu-item" onClick={e => GAEventsTracker("ComoElegirSurfSkate")}>
          Como Elegir SurfSkate
        </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuExtendedLayout;
