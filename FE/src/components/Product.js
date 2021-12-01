import React, { Component } from 'react';
import styled from 'styled-components';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
global.cart = []

export default class Product extends Component {

    notify(message){
        toast.success(message)
    }

    filterById(jsonObject, id) {
        return jsonObject.filter(function(jsonObject) {
            return (jsonObject['id'] === id);
        })[0];
    }

    addToCart(){
        var idecko = this.props.product.id
        var title = this.props.product.title;
        var image = this.props.product.image;
        var price = this.props.product.price;
        var qnt = 1
        var prod = {id:idecko,details:{title,image,price,qnt}}
        for (let key in global.cart) {
            if (global.cart[key].id === idecko) {
                global.cart[key].details.qnt += 1;
                this.notify("Produkt pridaný do košíka")
                return;
            }
        }
        global.cart.push(prod);
        this.notify("Produkt pridaný do košíka")
    }

    render() {
        const {id, title, image, price} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5">
                        <img src={image} alt="produkt" className="card-img-top" />
                        <button className="cart-btn"onClick={() => this.addToCart()}>
                                <i className="fas fa-cart-plus" />
                        </button>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center text-black mb-0">{title}</p>
                        <h5 className="text-black mb-0">
                            <span className="mr-1"></span>
                            {price}€
                        </h5>      
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

const ProductWrapper = styled.div`
    .card{
        border-color:transparent;
        transition: all 0.2s linear;
    }
    .card-footer{
        background: transparent;
    }
    &:hover{
        .card{
            border:0.3rem solid salmon;
        }
    }
    .img-container{
        position: relative;
        overflow: hidden;
    }
    .cart-btn{
        position:absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        border: none;
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%,100%)
    }
    .card:hover .cart-btn{
        transform:translate(0,0);
    }
`;