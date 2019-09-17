import React from 'react';
import { Router, Link, Route, Switch } from 'react-router-dom';

class ProductDetails extends React.Component {

    addToCart = () => {

    }

    render() {
        return(
            <div>
               <h4>Product Details:</h4>
               <p>Product Name: Product1</p>
               <p>Price: Rs. 1000.00</p>
               <p>Size: S, M</p>
               <button onClick={this.addToCart()}>Add to Cart</button>
            </div>
        );
    }
}

export default ProductDetails;
