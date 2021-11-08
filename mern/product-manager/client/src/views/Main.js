import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import AllProducts from '../components/AllProducts';
import OneProduct from '../components/OneProduct';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

const Main = () => {
    return (
    <div>
        <Router>
        <Switch>
            <Route exact path = "/">
                <div style={{display:'flex', justifyContent: 'space-around'}}>
                    <ProductForm/>
                </div>
                <AllProducts/>
            </Route>
            <Route path="/products/:id">
                <OneProduct/>
            </Route>
        </Switch>
        </Router>
    </div>
    )
}
export default Main;