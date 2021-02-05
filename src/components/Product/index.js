import React from "react";
import "./style.scss";
import useGAEventTracker from "../../hooks/useGAEventTracker";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Product = ({title, image, link, scrollPosition}) => {
  const GAEventsTracker = useGAEventTracker("External Links");
  
  return (
      <div className="product">
        <a href={link} 
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => GAEventsTracker("ProductoAmazon",{title})}>
          <div className="product-container">
            <LazyLoadImage
              className="product-image"
              effect="blur"
              scrollPosition={scrollPosition}
              src={image}
              alt={title}
              width="100%"
              height="100%"/>
            <span className="product-title">{title}</span>
          </div>
        </a>
      </div>
  );
};

export default Product;
