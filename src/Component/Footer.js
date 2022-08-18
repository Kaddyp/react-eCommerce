import React from 'react';

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            year: '1991'
        }
    }
    static getDerivedStateFromProps(props, state) {
        return {year: props.year };
    }

    render(){
        return(
            <div>
                <hr/>
                <center>
                    <h5>&copy; TSL Products {this.state.year} All Rights Reserved</h5>
                </center>
            </div>
        )
    }
}

export default Footer;