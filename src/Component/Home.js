import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    const renderProduct = props.displayData.map((item) =>{
        return(
            <Link key={item.ID} to={`/product/${item.ID}`} >
                <div className="col" key={item.ID}>
                <div className="card" style={{height: '200px'}}>
                    <img src={item.Image} className="card-mg-top my-2" alt={item.Image}/>
                    <div className="card-body">
                        <h6 className="card-title fw-bold">{item.Name}</h6>                       
                        <p className="card-text"><span>&#163;</span> {item.Cost}</p>
                        <p className="card-text">Use: {item.Uses}</p> 
                    </div>
                </div>
                </div>
            </Link>
        )
    })

    return(
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {renderProduct}
        </div>
    )
}

export default Home;
