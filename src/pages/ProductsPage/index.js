import React, { Fragment } from "react";
import { Helmet } from 'react-helmet';
import Footer from "../../components/Footer";
import ListProducts from "../../components/ListProducts";
import Navbar from "../../components/Navbar";
import { ProductsLinks } from "../../data/ProductsLinks";
import "./style.scss";

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
      <ListProducts links={ProductsLinks} />
    </main>
    <footer>
      <Footer />
    </footer>
  </Fragment>
);

export default ProductsPage;