import React from 'react';

const DisplayOrder = (props) =>{
    const renderOrderList = ({orderData, cartItems}) => {
        console.log(cartItems);
        if(orderData){
            return orderData.map((item) =>{           
                return(                
                    <div className="card" key={item.id}>
                        <div className="card-header">
                            <table className="table table-borderless mb-0">
                                <thead>
                                    <tr>
                                        <th className="py-0" scope="col">ORDER PLACED</th>
                                        <th className="py-0" scope="col">TOTAL</th>
                                        <th className="py-0" scope="col">DISPATCH TO</th>
                                        <th className="py-0" scope="col">ORDER #{item.id}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="py-0">{item.date}</th>
                                        <td className="py-0">{item.total}</td>
                                        <td className="py-0">{item.Name}</td>
                                        <td className="py-0">View order details</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>                           
                        </div>
                    </div>
                )
            })
        }
    } 

    return(
        <>
            {renderOrderList(props)}
        </>
    );
}
export default DisplayOrder;