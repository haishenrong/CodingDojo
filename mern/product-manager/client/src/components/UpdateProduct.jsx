import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
    
const UpdateProduct = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0.0);
    const [description, setDescription] = useState('');
    const history = useHistory();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [id]);
    
    const updateProduct = (e, id) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`,{
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
        history.push(`/products/${id}`);
    }
    
    return (
        <div style={{margin:"15px 15px"}}>
            <h1>Update Product Info</h1>
            <form onSubmit={(e) => updateProduct(e,id)}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value) } />
                </p>
                <p>
                    <label>Title</label><br />
                    $<input type="number" step="0.01" 
                    onChange={(e) => setPrice(e.target.value)} 
                    value={parseFloat(price).toFixed(2)}/>
                </p>
                <p>
                    <label>Description</label><br />
                    <textarea
                    name="description"
                    value={description} 
                    onChange={(e) => setDescription(e.target.value) } />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default UpdateProduct;