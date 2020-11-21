import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import ProductsPage from '../../pages/ProductsPage/ProductsPage'
import './App.scss'

const App = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={ProductsPage} />
        </Switch>
    </HashRouter>
)

export default App
