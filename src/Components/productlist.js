import React from 'react';
import { Router, NavLink, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import ProductDetails from './productdetails';

import '../css/productlist.css';
import '../css/product.css';

const Product = props => (
            <li>
                <div className="img-div">
                    <img className="prod-img" src={props.product.info.photo} />
                </div>
                <div className="prod-item">
                    <h4 className="prod-name"><Link to="/productdetails" target="_blank">{props.product.info.name}</Link></h4>
                </div>
            </li>
)

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: [] };
    }

    componentDidMount() {
        axios.get('mongodb+srv://triptigarg:Tanuakx1206@clustertripti-eliei.azure.mongodb.net/test?retryWrites=true&w=majority')
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    productList = () => {
        return this.state.products.map(function(currentProduct, i){
            return <Product product={currentProduct} key={i} />;
        })
    }

/*    importAll = (r) => {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }*/

    render() {
   //     const images = this.importAll(require.context('../Images', false, /\.(png|jpe?g|svg)$/));

        return (
            <div className="prod-container">
                <ul className="prod-list">
                    {this.productList()}
                </ul>
            </div>
        );
    }
}

export default ProductList;