import React, { Component } from 'react';
import CartItem from './CartItem';
import CartTotals from './CartTotals';


export default class CartList extends Component{

    constructor(props) {
        super(props);
        this.reren = this.reren.bind(this);
      }
    reren(){
        this.forceUpdate()
    }

    render(){
        return (
            <div>
                <div className="container-fluid">
                {global.cart.map(product=>{
                        return <CartItem key={product.id} item={product.details} value={product.id} reren={this.reren}/>
                    })
                    }
                </div>
                <CartTotals/>
            </div>
        );
    }
}
