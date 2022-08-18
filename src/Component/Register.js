import React from 'react';
import { NavLink } from 'react-router-dom';

class Register extends React.Component {
    constructor(props){
        super(props)

        this.state={
            fName:'',
            email:'',
            password:'',
            phone: ''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onUpdateUserDetails(this.state);
        this.props.history.push(`/login`);
    }
    

    render(){
        return(
            <>
                <div className="container">              
                    <div className="card my-5" style={{ width: '30%', margin: 'auto'}}>                      
                        <div className="card-body">
                            <h4 className="card-title py-2">Create account</h4>
                            <h3 style={{color:'red'}}>{this.state.message}</h3>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group mb-3">
                                    <label htmlFor="fName" className=' fw-bold'>Your name</label>
                                    <input type="text" id="fName" name="fName" className="form-control"
                                    value={this.state.fName || ""} onChange={this.handleChange} placeholder="First and last name" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="phone" className=' fw-bold'>Mobile number</label>
                                    <input type="text" id="phone" name="phone" className="form-control"
                                    value={this.state.phone || ""} onChange={this.handleChange} placeholder="Mobile number"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email" className=' fw-bold'>Email</label>
                                    <input type="email" id="email" name="email" className="form-control"
                                    value={this.state.email || ""} onChange={this.handleChange} placeholder="Email"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password" className=' fw-bold'>Password</label>
                                    <input type="password" id="password" name="password" className="form-control"
                                    value={this.state.password || ""} onChange={this.handleChange} placeholder="At least six characters"/>
                                </div>
                            
                                <button type="submit" className="btn btn-default w-100 my-3" style={{ backgroundColor: '#f0c040', color: '#000000'}}>Continue</button> 
                            </form>
                            <p>Already have an account? <NavLink to="/login">Sign in</NavLink></p>                          
                        </div>
                    </div>                    
                </div>
            </>           
        )
    }
}

export default Register;