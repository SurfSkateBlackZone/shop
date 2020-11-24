import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import ProductsPage from '../../pages/ProductsPage/ProductsPage';
// import BrandPage from '../../pages/BrandPage/BrandPage';
import BlogArticlePage from '../../pages/BlogArticlePage/BlogArticlePage';
import './App.scss'
import withTracker from '../../hooks/withTracker'

const App = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={withTracker(Home)} />
            <Route exact path="/products" component={withTracker(ProductsPage)} />
            {/* <Route exact path="/brands" component={BrandPage} /> */}
            <Route exact path="/blog/:url" component={withTracker(BlogArticlePage)} />
        </Switch>
    </HashRouter>
)

export default App
