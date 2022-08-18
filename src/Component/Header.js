import React, { Component, Fragment } from 'react';
import { NavLink } from "react-router-dom";
import JSON from './db.json';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            heading:"TSL",
            productList:'',
            category: 'All'
        }
    }

    renderCategory = (data) => {
        if(data){
            var unique = data
            .map(e => e['Category'])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter(obj=> data[obj])
            .map(e => data[e]);
      

            return unique.map((item) => {            
                return (
                    <option className="dropdown-item" value={item.Category} key={item.Category}>{item.Category}</option>
                )
            })
        }
    }

    handleCategoryChange = (event) => {
        let categoryName = event.target.value;    
        this.props.userText(categoryName);
    }

    handleChange = (event) => {
        // console.log(event.target.value)
        this.setState({keywords:event.target.value?event.target.value:'User Input Here'});
        this.props.userText(event.target.value);
    }

    render(){
        const {cartItems} = this.props;
        return(
            <Fragment>              
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to={{pathname: "https://www.tslproducts.com/"}} target="_blank">{this.state.heading}</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                      
                                <div className="col-4">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item px-3">
                                            <NavLink exact activeClassName="active" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item px-3">
                                            <NavLink exact activeClassName="active" to="/audio">Audio</NavLink>
                                        </li>
                                        <li className="nav-item px-3">
                                            <NavLink exact activeClassName="active" to="/control">Control</NavLink>
                                        </li>
                                        <li className="nav-item px-3">
                                            <NavLink exact activeClassName="active" to="/power">Power</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-5">
                                    <div className="input-group w-75">
                                        <select className="form-select rounded-star" id="inputGroupSelect02" onChange={this.handleCategoryChange} style={{ flex: 'none', width: '20%', backgroundColor: '#e9ecef'}}>
                                            <option value="default">All</option>    
                                            {this.renderCategory(this.state.productList)}                                        
                                        </select>
                                        <input className="form-control" type="search" aria-label="Search" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-3 text-center">
                                    <NavLink to="/login" className="btn btn-info mx-2">                                        
                                        Sign in
                                    </NavLink>                                    

                                    <NavLink to="/orders" className="btn btn-primary mx-2">                                    
                                        Orders
                                    </NavLink>

                                    <NavLink to="/card/viewBasket" className="btn btn-default" style={{position: 'relative'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                        </svg>
                                        <span className="px-2 fw-bold badge bg-warning text-dark rounded-pill" style={{ position: 'absolute', top: '2px', left: '46px'}}>
                                            {cartItems.reduce((a, c) => a + c.Quantity, 0)}
                                        </span>
                                        <span style={{ position: 'absolute', top: '18px', fontSize: '14px'}}>Basket</span>
                                    </NavLink>
                                </div>
                       
                        </div>
                    </div>
                </nav>
               
            </Fragment>
        )
    }

    componentDidMount(){
        //console.log(">>>>inside componentDidMount")
        //fetch(JSON, {method:'GET'})
        // return the promise
        //.then((res) => res.json())
        //return the data
        //.then((data) => {
            //console.log(data)
        this.setState({productList:JSON})
        //})
        //.catch((err) => {
           // console.log(err)
        //})

    }

}

export default Header;

/*
<NavLink to="/register" className="btn btn-success mx-2">Sign-up</NavLink>
*/