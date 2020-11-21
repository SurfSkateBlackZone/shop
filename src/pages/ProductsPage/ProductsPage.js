import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import ListProducts from "../../components/ListProducts/ListProducts";
import Navbar from "../../components/Navbar/Navbar";
import "./ProductsPage.scss";

const ProductsPage = () => (
  <Fragment>
    <header>
      <Navbar />
    </header>
    <main>
      <ListProducts />
    </main>
    <footer>
      <Footer />
    </footer>
  </Fragment>
);

export default ProductsPage;