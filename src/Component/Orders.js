import React from 'react';
import DisplayOrder from './DisplayOrder';

class Orders extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            orders: ''
        }
    }
    render(){
        console.log(this.state.orders);
        return(
            <>
                <h4>List Order</h4>
                <DisplayOrder orderData={this.state.orders} cartItems={this.props.cartItems} />
            </>
        )
    }
    componentDidMount(){
        fetch('http://localhost:8700/orders', { method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.setState({
                orders: data
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export default Orders;