import React from 'react';
import { NavLink } from 'react-router-dom';

class Login extends React.Component{
    
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:''       
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    checkout = (e) => {  
        const userExist = this.props.userDetails.find((person) => person.email === this.state.email);        
        if(userExist && userExist.password === this.state.password){
            this.props.onLoggedIn(userExist);
            this.props.history.push(`/checkout`);
        }
        else{
            alert('Please enter valid email address & password!');
        }
    }

    render(){
        console.log(this.props);
        return(
            <>
                <div className="container">              
                    <div className="card my-5" style={{ width: '30%', margin: 'auto'}}>                      
                        <div className="card-body">
                            <h4 className="card-title py-2">Sign-In</h4>
                            <h3 style={{color:'red'}}>{this.state.message}</h3>
                            
                            <div className="form-group mb-3">
                                <label htmlFor="email" className=' fw-bold'>Email</label>
                                <input type="email" name="email" className="form-control"
                                value={this.state.email || ''} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password" className=' fw-bold'>Password</label>
                                <input type="password" name="password" className="form-control"
                                value={this.state.password || ''} onChange={this.handleChange}/>
                            </div>
                           
                            <button className="btn btn-default w-100 my-3" style={{ backgroundColor: '#f0c040', color: '#000000'}} onClick={this.checkout}>Sign in</button>

                            <p className='mb-1'>New to TSL?</p>
                            <button className="btn btn-secondary w-100 my-2 text-dark" style={{ backgroundColor: '#f0f0f0', color: '#000000'}}>
                                <NavLink to="/register" className="text-decoration-none text-dark">
                                    Create your TSL account
                                </NavLink>
                            </button>                            
                        </div>
                    </div>                    
                </div>
            </>
        )
    }
    
}

export default Login;