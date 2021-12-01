import React, { Component} from 'react';
import Product from './Product';
import Title from './Title';

export default class Productlist extends Component {
    state={
        error: null,
        items: []
    }

    
    componentDidMount() {
        this.getProducts()
    }

    getProducts(){
        const url = "http://localhost:8080/products"
        const options = {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
            },
          };
        fetch(url,options)
          .then(res => res.json())
          .then(result => {this.setState({items: result})},
            (error) => {this.setState({error});}
          )
    }


    render() {
        const items = this.state.items
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Dostupné nástroje"/>
                        <div className="row">
                        {items.map(product=>{
                            return <Product key={product.id} product={product}/>
                            })
                        }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}