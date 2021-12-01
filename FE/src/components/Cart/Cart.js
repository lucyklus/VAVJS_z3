import React, { Component } from 'react';
import Title from '../Title';
import CartList from './CartList';

export default class Cart extends Component {

    render() {
        if(global.cart.length !== 0){
            return (
                <section>
                    <React.Fragment>
                        <Title name="Košík"/>
                        <div className="container-fluid text-center d-none d-lg-block">
                            <div className="row">
                                <div className="col-10 mx-auto col-lg-2">
                                    <p className="salmon">Produkty</p>
                                </div>
                                <div className="col-10 mx-auto col-lg-2">
                                    <p className="salmon">Názov produktu</p>
                                </div>
                                <div className="col-10 mx-auto col-lg-2">
                                    <p className="salmon">Cena</p>
                                </div>
                                <div className="col-10 mx-auto col-lg-2">
                                    <p className="salmon">Počet kusov</p>
                                </div>
                                <div className="col-10 mx-auto col-lg-2">
                                    <p className="salmon">Zmazať</p>
                                </div>
                                <div className="col-10 mx-auto col-lg-2">
                                    <p className="salmon">Súčet</p>
                                </div>
                            </div>
                        </div>
                        <CartList/>
                    </React.Fragment>
                </section>
            )
        }
        else{
            return(
                <section>
                    <Title name="Košík"/>   
                    <div className="text-center">Váš košík je prázdny</div>
                </section>
            )
            
        }
        
    }
}
