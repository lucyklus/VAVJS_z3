import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
//import Product from "./components/Product";
import Cart from "./components/Cart/Cart";
import Admin from "./components/Admin";
import Default from "./components/Default";
import Order from "./components/Order";
import Thanks from "./components/Thanks";

function App (){ 
    return (
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ProductList/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/thanks' element={<Thanks/>}/>
          <Route path='*' element={<Default/>}/>
        </Routes>
      </React.Fragment>
    );
}

export default App;
