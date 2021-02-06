import React, { lazy, Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./style.scss";
import withTracker from "hooks/withTracker";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";
import Spinner from 'components/Spinner';
// import BrandPage from 'pages/BrandPage';

const Home = lazy(() => import("pages/Home"));
const ProductsPage = lazy(() => import("pages/ProductsPage"));
const BlogArticlePage = lazy(() => import("pages/BlogArticlePage"));

const App = () => (
  <HashRouter>
      <ScrollToTop>
          <Switch>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={withTracker(Home)} />
              <Route exact path="/products" component={withTracker(ProductsPage)} />
              {/* <Route exact path="/brands" component={BrandPage} /> */}
              <Route
                exact
                path="/blog/:url"
                component={withTracker(BlogArticlePage)}
              />
            </Suspense>
          </Switch>
      </ScrollToTop>
  </HashRouter>
);

export default App;
