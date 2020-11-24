import React from "react";
import { Link } from "react-router-dom";
import Product from "../../Product/Product";
import "./SurfSkate.scss";

const SurfSkate = () => {
  return (
    <div className="section-surf-skate">
      <div className="section-name">
        <h1>SurfSkates</h1>
      </div>
      <div className="list-products">
        <Product link="https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=surfskateblac-21&m=amazon&o=30&p=8&l=as1&IS1=1&asins=B08GCCNCV2&linkId=38e5a5d0e0932648ec269feb92e45883&bc1=FFFFFF&lt1=_top&fc1=333333&lc1=0066C0&bg1=FFFFFF&f=ifr" />
        <Product link="https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=surfskateblac-21&m=amazon&o=30&p=8&l=as1&IS2=1&asins=B083QZQ7BB&linkId=636cbdc793e1c0c34164673a6743f242&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr" />
      </div>
      <div className="btn">
        <Link to="/products" >Ver Todo</Link>
      </div>
    </div>
  );
};

export default SurfSkate;
