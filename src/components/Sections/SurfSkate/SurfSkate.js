import React from "react";
import { Link } from "react-router-dom";
import Product from "../../Product";
import "./SurfSkate.scss";
import useGAEventTracker from "../../../hooks/useGAEventTracker";
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { ProductsLinks } from "../../../data/ProductsLinks";

const SurfSkate = () => {
  const GAEventsTracker = useGAEventTracker("Internal Links");
  return (
    <div className="section-surf-skate">
      <LazyLoadComponent>
        <div className="section-name">
          <h1>SURFSKATES</h1>
        </div>
        <div className="list-products">
          <Product title={ProductsLinks[0].title} image={ProductsLinks[0].image} link={ProductsLinks[0].link} />
          <Product title={ProductsLinks[1].title} image={ProductsLinks[1].image} link={ProductsLinks[1].link} />
        </div>
        <div className="btn">
          <Link to="/products" onClick={e => GAEventsTracker("ProductsVerTodo")} >Ver Todo</Link>
        </div>
      </LazyLoadComponent>
    </div>
  );
};

export default SurfSkate;
