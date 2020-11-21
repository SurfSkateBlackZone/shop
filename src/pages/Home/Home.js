import React, { Fragment } from "react";
import ContentHighlight from "../../components/ContentHighlight/ContentHighlight";
import Footer from "../../components/Footer/Footer";
import MessageHighlight from "../../components/MessageHighlight/MessageHighlight";
import Navbar from "../../components/Navbar/Navbar";
import SectionSurfSkate from "../../components/SectionSurfSkate/SectionSurfSkate";
import "./Home.scss";

const Home = () => (
  <Fragment>
    <header>
      <Navbar />
    </header>
    <main>
      <MessageHighlight />
      <ContentHighlight />
      <SectionSurfSkate />
    </main>
    <footer>
      <Footer />
    </footer>
  </Fragment>
);

export default Home;
