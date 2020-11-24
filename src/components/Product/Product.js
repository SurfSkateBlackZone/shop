import React from "react";
import "./Product.scss";
import useGAEventTracker from "../../hooks/useGAEventTracker";

const Product = ({link}) => {
  const GAEventsTracker = useGAEventTracker("External Links");
  
  return (
    <div className="product">
      <a href={link} 
        target="_blank"
        rel="noopener noreferrer"
        onClick={e => GAEventsTracker("ProductoAmazon")}>
          <iframe
            title={link}
            width="120px"
            height="240px"
            src={link}
          ></iframe>
      </a>
    </div>
  );
};

export default Product;
