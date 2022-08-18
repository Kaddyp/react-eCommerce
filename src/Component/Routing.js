import React, { useState} from 'react';
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Audio from './Audio';
import Control from './Control';
import Power from './Power';
import NoPage from './NoPage';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Login from './Login';
import Register from './Register';
import Basket from './Basket';
import Orders from './Orders';
import Checkout from './Checkout';
//import ClickCounter from './ClickCounter';
//import HoverCounter from './HoverCounter';
import JSON from './db.json';


const Routing = () =>{
  const [ prodData,  ]= useState(JSON);
  const [ filterData, setFilterData ]= useState(JSON);
  const [cartItems, setCartItems] = useState([]); 
  const [userDetails, setUserDetails] = useState([
    {
      email: "kaddy@gmail.com",
      fName: "Kalyani P",
      password: "123456789",
      phone: "154654656"
    }
  ]);
  const [loggedInUser, setLoggedInUser] = useState({});

  const filterDataHandler = (keyword) =>{   
    var output = (keyword === 'default') ? prodData : prodData.filter((item)=>{
        return item.Name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });
    setFilterData(output);
  }
  // Put this line outside render method.
  //const CreateHomeComponent = (props) => <Home  {...props} displayData={filterData}/>



  const onAdd = (product, quantity) => {  
    const exist = cartItems.find((x) => x.ID === product.ID);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.ID === product.ID ? { ...exist, Quantity: exist.Quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, Quantity: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.ID === product.ID);
    if (exist.Quantity === 1) {
      setCartItems(cartItems.filter((x) => x.ID !== product.ID));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.ID === product.ID ? { ...exist, Quantity: exist.Quantity - 1 } : x
        )
      );
    }
  };


  const onUpdateUserDetails = (user) => {
    const userExist = userDetails.find((person) => person.email === user.email);
    if(userExist){
      setUserDetails([...userDetails]);    
    }
    else{
      setUserDetails([...userDetails, { ...user}]);  
    }      
  }

  const onLoggedIn = (user) => {
    if(user !== ''){
      setLoggedInUser(user);
    }
  }

  return (
    <div className="container-fluid px-0">
      <BrowserRouter>
          <Header userText={filterDataHandler} cartItems={cartItems}/>
         
          <div className="container">
            <Switch>                                                      
              <Route exact path="/" component={ props => <Home {...props} displayData={filterData}/>} />              
              
              <Route exact path="/product/:productId" component={props => <ProductDetails {...props} onAdd={onAdd}/>} /> 

              <Route path="/audio" component={Audio} />
              <Route path="/control" component={Control} />
              <Route path="/power" component={Power} />

              <Route path="/login" component={props =><Login {...props} userDetails={userDetails} onLoggedIn={onLoggedIn}/>} />
              <Route path="/register" component={props =><Register {...props} userDetails={userDetails} onUpdateUserDetails={onUpdateUserDetails}/>} />

              <Route path="/cart/:productIdQty" component={props =><Cart {...props} cartItems={cartItems}/>} />
              <Route path="/card/viewBasket" component={props => <Basket {...props} cartItems={cartItems} onRemove={onRemove} />} />
              <Route path="/checkout" component={props => <Checkout {...props} cartItems={cartItems} loggedInUser={loggedInUser} />} />
              <Route path="/viewOrders" component={props => <Orders {...props} cartItems={cartItems}  />} />
              <Route path="*" component={NoPage} />
              {/* default redirect to home page */}
              <Route exact path="/" component={Home}/>
              <Redirect from="*" to="/" /> 
            </Switch>
          </div>
          <Footer year="2022"/>
      </BrowserRouter>

    </div>
  )
}

export default Routing;


/*
<Route exact path="/product/:productId" component={ProductDetails}/> 
 <ClickCounter />
          <HoverCounter />
*/