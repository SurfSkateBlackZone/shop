import React from "react";
import "./Product.scss";

const Product = ({link}) => {
  return (
    <div className="product">
      <iframe
        title={link}
        width="120px"
        height="240px"
        src={link}
      ></iframe>
    </div>
  );
};

export default Product;
