import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllProducts = () => {
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res=>setProducts(res.data))
        .catch(err=>console.log(err))
        }, [products]);
    
    const removeFromProducts = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                removeFromProducts(productId)
            })
            .catch(err => console.error(err));
    }
        
    return (
        <div style={{textAlign: 'center', marginTop: '20px', paddingTop: '20px', borderTop:"5px solid grey"}}>
            <h1> All Products: </h1>
            <ul> {
                products.map(prod => 
                <li key={`${prod._id}`}>
                    <Link style={{marginRight: '15px'}} to={`/products/${prod._id}`}>{prod.title}</Link>
                    <button style={{color:'red'}} class="btn btn-tertiary" onClick={(e)=>{deleteProduct(prod._id)}}>
                        Delete
                    </button>
                </li>)
            } </ul>
        </div>
    )
}

export default AllProducts