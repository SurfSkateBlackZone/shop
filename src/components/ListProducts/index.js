import React from "react";
import Product from "../Product";
import "./style.scss";
import { trackWindowScroll } from 'react-lazy-load-image-component';

const ListProducts = ({ links, scrollPosition }) => {
  return (
    <div className="list-products">
      <div className="list-products-name">
        <h1>SURFSKATES</h1>
      </div>
        <div className="list-products-content">
          { links.map((product, index) => (
            <Product 
              key={index} 
              title={product.title}
              image={product.image}
              link={product.link} 
              scrollPosition={scrollPosition}/>
          )) }
        </div>
    </div>
  );
};

export default trackWindowScroll(ListProducts);
