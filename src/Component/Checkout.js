import React from 'react';
import Country_States_JSON from './country-states.json';

class Checkout extends React.Component {

    constructor(){
        super();
        this.state = {
            id:Math.floor(Math.random()*1000000),
            Name: '',
            Email: '',        
            Phone:'',        
            Country: 'default',
            State: 'default',
            total: 0,
            card: 'credit',
            cc_name: '',
            cc_number: '',
            cc_expiration: '',
            cc_cvv: '',
            date: new Date()
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange = (event) => {   
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //const getNameFromCountryCode = Country_States_JSON.find((items) => items.country === this.state.Country);
        document.getElementById('flush-collapseTwo').className = 'accordion-collapse collapse show';
        document.getElementById('flush-collapseOne').className = 'accordion-collapse collapse';
    }

    renderCountry = (data) => {
        if(data){
            return data.map((item, index) => {
                return (                
                    <option value={item.country} key={item.numberCode + `_` + index}>
                        {item.country}
                    </option>            
                )
            })
        }
    }

    handleCountry = (event) => {     
        this.setState({Country:event.target.value})
    }


    renderState = (data) => {
        console.log(this.state.Country);
        if(this.state.Country !== 'default'){
            const stateArr = data.find((items) => items.country === this.state.Country);            
            if(stateArr.states !== undefined && stateArr.states.length > 0){
                return stateArr.states.map((item, index) =>  {  
                    return(                           
                        <option value={item} key={item + `_` + index}>
                            {item}
                        </option> 
                    )     
                })
            }           
        }        
    }

    handleState = (event) => {      
        this.setState({State:event.target.value})
    }

    handleRadioChange = (event) => {      
      this.setState({
        card: event.target.value
      });
    }

    handleCheckout = (event) => {
        event.preventDefault();
        const obj = this.state;
        document.getElementById('flush-collapseOne').className = 'accordion-collapse collapse';
        document.getElementById('flush-collapseTwo').className = 'accordion-collapse collapse';

        fetch('http://localhost:9870/orders',{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(this.props.history.push('/viewOrders'));        
    }

    render(){
        const { cartItems, loggedInUser } = this.props;
        return(
            <div className="container">
                <main>
                    <div className="py-5 text-center">
                        <h2 className=''>Checkout</h2>
                    </div>
        
        
                    <div className="row">
                        <div className="col-8">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    1. Choose a delivery address
                                </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <label htmlFor="Name" className="form-label">First name</label>
                                                <input type="text" className="form-control" name="Name" placeholder="" defaultValue={loggedInUser.fName} onChange={this.handleChange}/>
                                                <div className="invalid-feedback">
                                                    Valid first name is required.
                                                </div>
                                            </div>
        
                                            <div className="col-12">
                                            <label htmlFor="Email" className="form-label">Email</label>
                                            <input type="email" className="form-control" name="Email" placeholder="you@example.com"  onChange={this.handleChange}/>
                                            <div className="invalid-feedback">
                                                Please enter a valid email address for shipping updates.
                                            </div>
                                            </div>

                                            <div className="col-12">
                                            <label htmlFor="Phone" className="form-label">Phone</label>
                                            <input type="text" className="form-control" name="Phone" placeholder="07775060244" onChange={this.handleChange}/>
                                            <div className="invalid-feedback">
                                                Please enter a valid phone Number.
                                            </div>
                                            </div>
        
                                            <div className="col-12">
                                            <label htmlFor="Address" className="form-label">Address</label>
                                            <input type="text" className="form-control" name="Address" placeholder="1234 Main St" onChange={this.handleChange}/>
                                            <div className="invalid-feedback">
                                                Please enter your shipping address.
                                            </div>
                                            </div>
        
                                            <div className="col-md-5">
                                            <label htmlFor="Country" className="form-label">Country</label>                                    
                                            <select className="form-select" name="Country"defaultValue={"default"} onChange={this.handleCountry}>
                                                <option value="default" >Choose...</option>
                                                {this.renderCountry(Country_States_JSON)} 
                                            </select>                                  
                                            <div className="invalid-feedback">
                                                Please select a valid country.
                                            </div>
                                            </div>
        
                                            <div className="col-md-4">
                                            <label htmlFor="State" className="form-label">State</label>
                                            <select className="form-select" name="State" defaultValue={"default"} onChange={this.handleState}>
                                                <option value="default" >Choose...</option>
                                                {this.renderState(Country_States_JSON)} 
                                            </select>                                            
                                            <div className="invalid-feedback">
                                                Please provide a valid state.
                                            </div>
                                            </div>
        
                                            <div className="col-md-3">
                                            <label htmlFor="zip" className="form-label">Zip</label>
                                            <input type="text" className="form-control" name="Zip" placeholder="" onChange={this.handleChange}/>
                                            <div className="invalid-feedback">
                                                Zip code required.
                                            </div>
                                            </div>
        
                                            <button type="submit" className="btn btn-warning" onClick={this.handleSubmit}>Use this address</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    2. Payment method
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        
                                        <div className="my-3">
                                            <div className="form-check">
                                                <input value="credit" name="paymentMethod" type="radio" className="form-check-input" onChange={this.handleRadioChange} checked={this.state.card === "credit"}/>
                                                <label className="form-check-label" htmlFor="credit">Credit card</label>
                                            </div>
                                            <div className="form-check">
                                                <input value="debit" name="paymentMethod" type="radio" className="form-check-input" onChange={this.handleRadioChange} checked={this.state.card === "debit"}/>
                                                <label className="form-check-label" htmlFor="debit">Debit card</label>
                                            </div>
                                            <div className="form-check">
                                                <input value="paypal" name="paymentMethod" type="radio" className="form-check-input" onChange={this.handleRadioChange} checked={this.state.card === "paypal"}/>
                                                <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                            </div>
                                        </div>
        
                                        <div className="row gy-3">
                                            <div className="col-md-6">
                                                <label htmlFor="cc-name" className="form-label">Name on card</label>
                                                <input type="text" className="form-control" name="cc_name" placeholder="" required  onChange={this.handleChange}/>
                                                <small className="text-muted">Full name as displayed on card</small>
                                                <div className="invalid-feedback">
                                                    Name on card is required
                                                </div>
                                            </div>
        
                                            <div className="col-md-6">
                                                <label htmlFor="cc-number" className="form-label">Credit card number</label>
                                                <input type="text" className="form-control" name="cc_number" placeholder="" required  onChange={this.handleChange}/>
                                                <div className="invalid-feedback">
                                                    Credit card number is required
                                                </div>
                                            </div>
        
                                            <div className="col-md-3">
                                                <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                                                <input type="text" className="form-control" name="cc_expiration" placeholder="" required  onChange={this.handleChange}/>
                                                <div className="invalid-feedback">
                                                    Expiration date required
                                                </div>
                                            </div>
        
                                            <div className="col-md-3">
                                                <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                                <input type="text" className="form-control" name="cc_cvv" placeholder="" required  onChange={this.handleChange}/>
                                                <div className="invalid-feedback">
                                                    Security code required
                                                </div>
                                            </div>
                                        </div>
        
                                        <hr className="my-4" />
        
                                        <button className="btn btn-primary btn-lg w-100" type="submit" onClick={this.handleCheckout}>Continue to checkout</button>
        
                                    </div>
                                </div>
                            </div>                            
                        </div>
                        </div>
        
        
                        <div className="col-4">
                            <h5 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-primary">Order Summary</span>
                                <span className="badge bg-primary rounded-pill">{cartItems.reduce((a, c) => a + c.Quantity, 0)}</span>
                            </h5>
                            <table className="table">                    
                                <tbody>
                                    <tr>
                                        <td>Items: </td>
                                        <td className='text-end'>{this.state.total}</td>
                                    </tr>
                                    <tr>
                                        <td>Postage & Packing: </td>
                                        <td className='text-end'>Free</td>
                                    </tr>
                                    
                                    <tr className='fw-bold' style={{color: '#B12704'}}>
                                        <td>Order Total:</td>
                                        <td className='text-end'>{this.state.total}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> 
                    </div>        
                </main>
            </div>
        )
    }
  
    componentDidMount(){
        const { cartItems } = this.props;
        const totalItems = cartItems.reduce((a, c) => a + c.Quantity * (c.Cost - (c.Cost * (c.Discount / 100))).toFixed(2), 0) ;  
        this.setState({
            total: totalItems
        });
    }
}

export default Checkout;