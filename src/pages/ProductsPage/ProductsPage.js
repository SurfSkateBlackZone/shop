import React, { Fragment } from "react";
import { Helmet } from 'react-helmet';
import Footer from "../../components/Footer/Footer";
import ListProducts from "../../components/ListProducts/ListProducts";
import Navbar from "../../components/Navbar/Navbar";
import "./ProductsPage.scss";

const ProductsPage = () => (
  <Fragment>
    <Helmet>
    <meta
        name="description"
        content="Descubre los mejores SurfSkates Completos en BlackZone. Tu tienda de SurfSkates"
      />
      <title> Black Zone | Productos</title>
    </Helmet>
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