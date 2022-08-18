import React, { useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import JSON from './db.json';

const Cart = (props) => {
    const { cartItems } = props;
    const [addToProduct, setAddToProduct] = useState([]);
    const [subTotal, setSubTotal] = useState();
    const itemsPrice = cartItems.reduce((a, c) => a + c.Quantity * (c.Cost - (c.Cost * (c.Discount / 100))).toFixed(2), 0);

    useEffect(() => {
        var item = JSON.find(item => item.ID === props.match.params.productIdQty.split(',')[0]);     
        setAddToProduct(item);
        setSubTotal(itemsPrice.toFixed(2));
    }, [addToProduct, props, itemsPrice]);

   
    return(
        <div className="row"> 
            <div className="col-9">
                <div className="row justify-content-md-center my-5">
                    <div className="col-2">
                        <img src={addToProduct.Image} className="img-responsive" alt={addToProduct.Image} style={{width: '100%'}}/>
                    </div>
                    <div className="col-3">
                        <h6 className="mb-0">Added to Basket</h6>
                        <p className="mb-0"><span style={{fontWeight: '500'}}>Item Package Quantity:</span> {props.match.params.productIdQty.split(',')[1]}</p>  
                    </div>
                </div>               
            </div>                
            <div className="col-3">
                <div className="card p-3">
                    <h5>Basket Subtotal: <span>&#163;</span> {subTotal}</h5>
                    <button type="button" className="btn btn-warning">Proceed to Checkout</button>
                    <br />                    
                    <button type="button" className="btn btn-light">
                        <NavLink to='/card/viewBasket'>Go to basket</NavLink>
                    </button>                    
                </div>
            </div>          
        </div>
    )
    
}

export default Cart;