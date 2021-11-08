import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';

const Main = () => {
    return (
        <div style={{display:'flex', justifyContent: 'space-around'}}>
            <ProductForm/>
        </div>
    )
}
export default Main;