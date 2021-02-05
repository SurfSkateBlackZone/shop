import React from "react";
import { Link } from "react-router-dom";
import HowChooseSurfSkateImg from "../../../assets/HowChooseSurfSkate.jpg";
import "./HowChooseSurfSkate.scss";
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const HowChooseSurfSkate = () => {
  return (
    <div className="section-how-choose-surf-skate">
      <LazyLoadComponent>
        <div className="content">
          <div className="content-text">
            <span>Como Elegir Tu SurfSkate</span>
          </div>
          <div className="content-btn">
            <Link to="/blog/como-elegir-surfskate">Ver ahora</Link>
          </div>
        </div>
        <img className="image-background"
          src={HowChooseSurfSkateImg}
          alt="HowChooseSurfSkateImg"
          width="100%"
          height="100%" />
      </LazyLoadComponent>
    </div>
  );
};

export default HowChooseSurfSkate;
