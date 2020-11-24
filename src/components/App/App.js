import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import ProductsPage from '../../pages/ProductsPage/ProductsPage';
// import BrandPage from '../../pages/BrandPage/BrandPage';
import BlogArticlePage from '../../pages/BlogArticlePage/BlogArticlePage';
import './App.scss'

const App = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={ProductsPage} />
            {/* <Route exact path="/brands" component={BrandPage} /> */}
            <Route exact path="/blog/:url" component={BlogArticlePage} />
        </Switch>
    </HashRouter>
)

export default App
