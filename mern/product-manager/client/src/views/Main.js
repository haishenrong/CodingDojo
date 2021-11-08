import React from 'react';
import ProductForm from '../components/ProductForm';
import AllProducts from '../components/AllProducts';
import OneProduct from '../components/OneProduct';
import UpdateProduct from '../components/UpdateProduct';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <Route exact path="/products/:id">
                <OneProduct/>
            </Route>
            <Route path="/products/edit/:id">
                <UpdateProduct />
            </Route>
        </Switch>
        </Router>
    </div>
    )
}
export default Main;