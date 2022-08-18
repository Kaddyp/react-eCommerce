import React from 'react';
import { NavLink } from "react-router-dom";

class Basket extends React.Component {
    constructor(){
        super();
        this.state = {
            total : 0,
            isLoggedIn: false
        }
    }



    /*checkboxHandler = (event, product) =>{
        const { cartItems } = this.props;    
        var it = cartItems.find(item => item.ID === product.ID);
        const productTotal = (((it.Cost - (it.Cost * (it.Discount / 100))).toFixed(2)) * it.Quantity).toFixed(2);
        console.log(it);
        if(event.target.checked){           
            this.setState((state)=> {
                return {total : (Number(state.total) + productTotal)}
            })
        }
        else{
            this.setState((state)=> {
                return {total : (Number(state.total) - productTotal).toFixed(2)}
            })
        }
    }*/


    renderItemList = ({cartItems}) =>{
        if(cartItems){
            return cartItems.map((items, index) =>{
                return (
                    <>                       
                        <tr key={items+index}>
                            <th scope="row" className='py-4' style={{verticalAlign: 'middle'}}>
                                <input type="checkbox" defaultChecked={items.IsChecked} style={{width: '16px', height: '16px'}} onChange={() => this.props.onRemove(items)}/>
                            </th>
                            <td className='py-4' style={{verticalAlign: 'middle'}}>
                                <img src={items.Image} className="img-responsive" alt={items.Image} style={{width: '75%'}}/>
                            </td>
                            <td>
                                <h6><NavLink key={items.ID} to={`/product/${items.ID}`} className="text-reset text-decoration-none">{items.Name}</NavLink></h6>
                                <p className="text-success mb-0 fst-italic" style={{fontSize: '12px'}}>In stock</p>
                                <p className="mb-0" style={{fontSize: '12px'}}><span style={{fontWeight: '700'}}>Item Package Quantity:</span> {items.Quantity}</p>
                                <button className="btn btn-link px-0" onClick={() => this.props.onRemove(items)} style={{color: '#007185'}}>Delete</button>
                            </td>
                            <td>
                                <h6><span>&#163;</span> {(items.Cost - (items.Cost * (items.Discount / 100))).toFixed(2)}</h6>
                            </td>
                        </tr>                             
                    </>
                )
            })
        }
    }

    renderBasketContainer = ({cartItems}) => {
        if(cartItems.length > 0){
            return (
                <div className='row'>
                    <div className='col-9'>
                        <div className="card">              
                            <div className="card-body">
                                <h4 className="card-title">Shopping Basket</h4>
                                <p className="card-text">No items selected. Select all items</p>

                                <div className="row"> 
                                    <table className="table table-responsive">
                                        <thead>
                                            <tr>                                
                                                <th scope="col"></th>
                                                <th scope="col" style={{width: '25%'}}></th>
                                                <th scope="col" style={{width: '60%'}}></th>
                                                <th scope="col">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderItemList(this.props)}
                                        </tbody>
                                        <caption className="text-end">Subtotal ({cartItems.reduce((a, c) => a + c.Quantity, 0)} items) : {(this.state.total).toFixed(2)}</caption>                               
                                    </table>                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">              
                            <div className="card-body">
                                <h6>Subtotal ({cartItems.reduce((a, c) => a + c.Quantity, 0)} items) : {(this.state.total).toFixed(2)}</h6> 
                                <button type="button" className="btn btn-warning w-100 text-center">
                                    <NavLink to={this.state.isLoggedIn ? "/checkout" : "/login"}>
                                        Proceed to Checkout
                                    </NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className='row'>
                    <div className='col-9'>
                        <div className="card">              
                            <div className="card-body">
                                <h4 className="card-title">Your Amazon Cart is empty.</h4>
                                <p className="card-text">Check your Saved for later items below or <NavLink exact activeClassName="active" to="/">continue shopping</NavLink>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render(){       
        return(
            <React.Fragment>
                {this.renderBasketContainer(this.props)}
            </React.Fragment>
        )
    }

    componentDidMount(){
        const { cartItems } = this.props;
        this.setState({
            total : cartItems.reduce((a, c) => a + c.Quantity * (c.Cost - (c.Cost * (c.Discount / 100))).toFixed(2), 0)
        })
    }
}

export default Basket;