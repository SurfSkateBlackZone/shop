import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import useGAEventTracker from "hooks/useGAEventTracker";

const MenuExtendedLayout = (props,ref) => {
  const GAEventsTracker = useGAEventTracker("Internal Links");

  return (
    <div className="menu-extended-layout" ref={ref}>
      <div className="menu-list-options">
        <div className="menu-option">
          <Link to="/" className="menu-item" onClick={e => GAEventsTracker("Inicio")}>
            <span>Inicio</span> 
          </Link>
        </div>
        <div className="menu-option">
          <Link to="/products" className="menu-item" onClick={e => GAEventsTracker("Productos")}>
            <span>Productos</span> 
          </Link>
        </div>
        <div className="menu-option">
          <Link to="/blog/como-elegir-surfskate" className="menu-item" onClick={e => GAEventsTracker("ComoElegirSurfSkate")}>
            <span>Como Elegir SurfSkate</span> 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(MenuExtendedLayout);
