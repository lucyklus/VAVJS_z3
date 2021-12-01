import React from 'react';
import {Link} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
toast.configure()

function clearCart(){
    global.cart = []
    toast.error("Košík zmazaný")
}


export default function CartTotals() {
    if(global.cart.length !== 0){
        return (
            <div className="container">
                <div className="row">
                    <div className="mt-5 ms-sm-5 ms-md-auto col-sm-7">
                        
                        <Link to="/">
                            <button 
                                className="btn btn-outline-danger mb-3 px-5 mybtn"
                                type="button"
                                onClick={()=>clearCart()}
                                
                            >
                                Zmazať košík
                            </button>
                        </Link>
                        <h5> Celková suma : {global.subtotal}€ </h5>
                        <Link to="/order">
                            <button 
                                className="btn btn-outline-success mb-3 px-5 mybtn"
                                type="button"
                            >
                                Objednať
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}
