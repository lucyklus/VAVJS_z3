import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
//import Product from "./components/Product";
import Cart from "./components/Cart";
import Admin from "./components/Admin";
import Default from "./components/Default";

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ProductList/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='*' element={<Default/>}/>
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
