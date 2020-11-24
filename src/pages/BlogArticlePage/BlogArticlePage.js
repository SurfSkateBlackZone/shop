import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { useParams, Redirect } from "react-router-dom";
import Article from "../../components/Blog/Article/Article";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { urls } from "../../data/urls";
import { ArticleInformation } from "../../data/ArticlesInformation";

const BlogArticlePage = () => {
  const { url } = useParams();

  const validateUrl = (url) => {
    for (const urlName of urls) {
      if (url === urlName) {
        console.log("True");
        return true;
      }
    }
    console.log("False");
    return false;
  };

  const { title, resume, description } = ArticleInformation[url] || {};

  return (
    <Fragment>
      {!validateUrl(url) && <Redirect to="/" />}
      <Helmet>
        <meta name="description" content={resume} />
        <title>Black Zone | {title}</title>
      </Helmet>
      <header>
        <Navbar />
      </header>
      <main>
        <Article title={title} description={description} />
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default BlogArticlePage;
