import React from "react";
import { Link } from "react-router-dom";
import HowChooseSurfSkateImg from "../../../assets/HowChooseSurfSkate.jpg";
import "./HowChooseSurfSkate.scss";

const HowChooseSurfSkate = () => {
  return (
    <div className="section-how-choose-surf-skate">
      <div className="content">
        <div className="content-text">
          <span>Como Elegir Tu SurfSkate</span>
        </div>
        <div className="content-btn">
          <Link to="/blog/como-elegir-surfskate">Ver ahora</Link>
        </div>
      </div>
      <img src={HowChooseSurfSkateImg} alt="HowChooseSurfSkateImg" />
    </div>
  );
};

export default HowChooseSurfSkate;
