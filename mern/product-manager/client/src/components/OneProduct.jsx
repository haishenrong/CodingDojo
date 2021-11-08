import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import axios from 'axios';

const OneProduct = () => {
    const [product, setProduct] = useState(null);
    const {id} = useParams(); 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res=>{
            console.log(id)
            console.log(res.data)
            setProduct(res.data)
        })
        .catch(err=>console.log(err))
    }, []);

    return (
        <div style={{margin:"15px 15px"}}> {
            product !== null ? <div>
            <h1>{product.title}</h1>
            <p> Price: {product.price}</p>
            <p> Description: {product.description}</p></div>
            : <h1> Product not found </h1>
        }
        </div>
    )
}

export default OneProduct