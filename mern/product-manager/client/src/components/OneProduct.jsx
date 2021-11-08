import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

const OneProduct = () => {
    const [product, setProduct] = useState(null);
    const {id} = useParams(); 
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res=>{
            console.log(id)
            console.log(res.data)
            setProduct(res.data)
        })
        .catch(err=>console.log(err))
    }, [product, id]);

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.error(err));
        history.push('/');
    }
        

    return (
        <div style={{margin:"15px 15px"}}> {
            product !== null ? <div>
            <h1>{product.title}</h1>
            <p> Price: {parseFloat(product.price).toFixed(2)}</p>
            <p> Description: {product.description}</p>
            <Link style={{marginRight: '15px'}} to={`/products/edit/${product._id}`}>
                Edit
            </Link>
            <button style={{color:'red'}} class="btn btn-tertiary" onClick={(e)=>{deleteProduct(product._id)}}>
                Delete
            </button>
            </div>
            : <h1> Product not found </h1>
        }
        </div>
    )
}

export default OneProduct