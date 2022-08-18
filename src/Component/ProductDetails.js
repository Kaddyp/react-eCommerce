import React, { useState, useEffect } from 'react';
import DisplayProduct from './DisplayProduct';
import JSON from './db.json';

const ProductDetails = (props) =>{   
    const [product, setProduct] = useState('');
    
    useEffect(() => {
        var item = JSON.find(item => item.ID === props.match.params.productId);     
        setProduct(item);
    }, [product, props]); // <- add the count variable here

    const addToCartHandler = (product, quantity) =>{
        props.onAdd(product, quantity);
    }

    return(
        <>
            <DisplayProduct prod={product} addToCart={addToCartHandler}/>
        </>
       
    )
    
}

export default ProductDetails;