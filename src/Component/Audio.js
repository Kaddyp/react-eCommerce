import React from 'react';
import JSON from './db.json';
import DisplayListProduct from './DisplayListProduct';
import FilterList from './FilterList';

class Audio extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productList : ''
        }
    }

    priceFilterHandler = (price) => {
        var List = (JSON).filter(item => item.Uses === "Audio Monitoring").filter(function(items) {           
            let val = price.split('&');
            return items.Cost >= val[0] && items.Cost < val[1];
        });
        this.setState({ 
            productList : List
        });
    }

    render(){
        return (
            <div className='row'>  
                <div className='col-2'>
                    <FilterList priceFilter={this.priceFilterHandler}/>
                </div>
                <div className='col-8'>
                    <DisplayListProduct listOfProduct={this.state.productList}/>
                </div>                
            </div>
        )
    }

    //calling api with async await  
    //async componentDidMount(){
    //    let restId =this.props.location.search.split('=')[1];
    //    let response = await axios.get(`${url}/${restId}`)
    //    let menuResponse = await axios.get(`${menuUrl}/${restId}`)
    //    this.setState({details:response.data[0],menuList:menuResponse.data})
    //}

    //call api 
    componentDidMount(){
        var list = JSON.filter(item => item.Uses === "Audio Monitoring");      
        this.setState({productList:list})
    }
}
  
export default Audio;