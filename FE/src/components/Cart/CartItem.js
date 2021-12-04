import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
toast.configure()

global.subtotal = 0

export default class CartItem extends Component{

    increment(){
        for (let key in global.cart) {
            if (global.cart[key].id === this.props.value) {
                global.cart[key].details.qnt += 1;
                this.forceUpdate()
                this.props.reren()
                return;
            }
        }
    }

    decrement(){
        for (let key in global.cart) {
            if (global.cart[key].id === this.props.value) {
                if(global.cart[key].details.qnt !== 1){
                    global.cart[key].details.qnt -= 1;
                    this.forceUpdate()
                    this.props.reren()
                    return;
                } 
            }
        }
    }

    delete() {
        global.cart = global.cart.filter(item => {return (item.id !== this.props.value)})
        this.forceUpdate()
        this.props.reren()
        toast.success("Produkt odobratý z košíka")
        return;
    }

    sumTotal(){
        global.subtotal = 0;
        for (let key in global.cart) {
            global.subtotal += global.cart[key].details.price * global.cart[key].details.qnt
        }
    }

    render() {
        const {title,image,price,qnt} = this.props.item;
        const id = this.props.value;
        var total = this.props.item.price*this.props.item.qnt;
        this.sumTotal()
        if(global.cart.length === 0){
            return(
                <div></div>
            )
        }
        else{
            return(
                <div className="row my-2 text-center">
                    <div className="col-10 mx-auto col-lg-2">
                        <img
                            src={image}
                            style={{ width: "5rem", height: "5rem" }}
                            className="img-fluid"
                            alt="produkt"
                        />
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <span className="d-lg-none">Produkt : </span>
                        {title}
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <span className="d-lg-none">Cena : </span>
                        {price}€
                    </div>
                    <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                        <div className="d-flex justify-content-center">
                            <div>
                                <span className="btn btn-black mx-1" onClick={()=>this.decrement()}>
                                    -
                                </span>
                                <span className="btn btn-black mx-1">{qnt}</span>
                                <span className="btn btn-black mx-1" onClick={()=>this.increment()}>
                                    +
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col 10 mx-auto col-lg-2">
                        <div className="cart-icon" onClick={()=>this.delete()}>
                            <i className="fa fa-trash"></i>
                        </div>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        {total}€
                    </div>
                </div>
            )
        }
    }
}
