import React from "react";
import Product from "../Product/Product";
import "./ListProducts.scss";

const ListProducts = ({ link }) => {
  return (
    <div className="list-products">
      <div className="list-products-name">
        <h1>SurfSkates</h1>
      </div>
      <div className="list-products-content">
        <Product link="https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=surfskateblac-21&m=amazon&o=30&p=8&l=as1&IS1=1&asins=B08GCCNCV2&linkId=38e5a5d0e0932648ec269feb92e45883&bc1=FFFFFF&lt1=_top&fc1=333333&lc1=0066C0&bg1=FFFFFF&f=ifr" />
        <Product link="https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=surfskateblac-21&m=amazon&o=30&p=8&l=as1&IS1=1&asins=B08G51P1TS&linkId=4b059ebd020c1ec99c91c9206873418c&bc1=FFFFFF&lt1=_top&fc1=333333&lc1=0066C0&bg1=FFFFFF&f=ifr" />
      </div>
    </div>
  );
};

export default ListProducts;
