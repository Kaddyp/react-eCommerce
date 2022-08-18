import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';

const DisplayProduct = (props) => {
    const history = useHistory();
    const productObject = props.prod;
    const [value, setValue] = useState(1);
    const handleChange = event => {
        const value = Math.max(1, Math.min(30, Number(event.target.value)));
        setValue(value);
    };

    const addToCart = () =>{       
        props.addToCart(productObject, value);
        history.push(`/Cart/${productObject.ID + ',' +value}`);
    }
   
    return(
        <div className="row">           
            <div className="col-4" style={{marginTop: '10%'}}>               
                <img src={productObject.Image} className="img-responsive" alt={productObject.Image} style={{width: '60%'}}/>
            </div>
            <div className="col-6">
                <h2>{productObject.Name}</h2>
                <h6><span style={{color:'red'}}>-{productObject.Discount}%</span> <span>&#163;</span> {(productObject.Cost - (productObject.Cost * (productObject.Discount / 100))).toFixed(2)}</h6>
                <p>RRP: <span className='text-decoration-line-through'><span>&#163;</span> {productObject.Cost}</span></p>
                <table className="table table-borderless"  style={{width: '40%'}}>       
                    <tbody>
                        <tr>
                            <th className="px-0" scope="row">Brand</th>
                            <td className="px-0">{productObject.Brand}</td>                    
                        </tr>  
                        <tr>
                            <th className="px-0" scope="row">Form</th>
                            <td className="px-0">{productObject.Form}</td>                    
                        </tr>   
                        <tr>
                            <th className="px-0" scope="row">Uses</th>
                            <td className="px-0">{productObject.Uses}</td>                    
                        </tr>                   
                    </tbody>
                </table>

                <h6>About this item</h6>
                <p>{productObject.Description}</p>
            </div>
            <div className="col-2">
                <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">
                            <span>&#163;</span> {(productObject.Cost - (productObject.Cost * (productObject.Discount / 100))).toFixed(2)}
                        </h5>                  
                        <p className="card-text">Free delivery</p> 
                        <h6 className="text-success">In Stock.</h6>  
                        
                        <div className="mb-3 row">
                            <label htmlFor='quantity' className="col-sm-4 col-form-label">Quantity:</label>
                            <div className="col-sm-8 px-0">
                                <input type="number" className="form-control" id="quantity" min={1} max={30} style={{width:'50%'}} onChange={handleChange}  value={value}/>
                            </div>
                        </div>  

                        <button className="btn btn-warning w-100 rounded-pill" onClick={addToCart}>Add to Cart</button>             
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DisplayProduct;