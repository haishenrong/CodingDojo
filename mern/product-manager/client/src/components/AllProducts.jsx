import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllProducts = () => {
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res=>setProducts(res.data))
        .catch(err=>console.log(err))
        }, [setProducts]);

    return (
        <div style={{textAlign: 'center', marginTop: '20px', paddingTop: '20px', borderTop:"5px solid grey"}}>
            <h1> All Products: </h1>
            <ul> {
                products.map(prod => 
                <li key={`${prod._id}`}>
                    <Link to={`/products/${prod._id}`}>{prod.title}</Link>
                </li>)
            } </ul>
        </div>
    )
}

export default AllProducts