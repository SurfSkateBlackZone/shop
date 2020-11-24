import React, { Fragment } from "react";
import { Helmet } from 'react-helmet';
import ContentHighlight from "../../components/ContentHighlight/ContentHighlight";
import Footer from "../../components/Footer/Footer";
import MessageHighlight from "../../components/MessageHighlight/MessageHighlight";
import Navbar from "../../components/Navbar/Navbar";
import HowChooseSurfSkate from "../../components/Sections/HowChooseSurfSkate/HowChooseSurfSkate";
import SurfSkate from "../../components/Sections/SurfSkate/SurfSkate";
import MenuProvider from "../../providers/Menu/MenuProvider";
import "./Home.scss";

const Home = () => (
  <Fragment>
    <Helmet>
      <meta
        name="description"
        content="BlackZone es una tienda online especializada en SurfSkates.
        Aqui encontraras las mejores marcas de SurfSkate como Yowsurf, Carver o Slide."
      />
      <title>Black Zone | SurfSkate Shop</title>
    </Helmet>
    <header>
      <Navbar />
    </header>
    <main>
      <MessageHighlight />
      <ContentHighlight />
      <SurfSkate />
      <HowChooseSurfSkate />
    </main>
    <footer>
      <Footer />
    </footer>
  </Fragment>
);

export default Home;
