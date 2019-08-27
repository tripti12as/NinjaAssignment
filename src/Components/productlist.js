import React from 'react';
import { Router, NavLink, Link, Route, Switch } from 'react-router-dom';
import ProductDetails from './productdetails';

import '../css/productlist.css';
import '../css/product.css';

class ProductList extends React.Component {
    constructor() {
        super();
    }

    importAll = (r) => {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    render() {
        const images = this.importAll(require.context('../Images', false, /\.(png|jpe?g|svg)$/));

        return (
            <div className="prod-container">
                <ul className="prod-list">
                    <li>
                        <div className="img-div">
                            <img className="prod-img" src={images['top1.jpg']} />
                        </div>
                        <div className="prod-item">
                            <h4 className="prod-name"><Link to="/women/tops/productid" params={images['top1.jpg']}>Product1</Link></h4>
                        </div>
                    </li>
                    <li>
                    <div className="img-div">
                            <img className="prod-img" src={images['top2.jpg']} />
                        </div>
                        <div className="prod-item">
                            <h4 className="prod-name"><Link to="/productdetails" target="_blank">Product2</Link></h4>
                        </div>
                    </li>
                    <li>
                    <div className="img-div">
                            <img className="prod-img" src={images['top3.jpg']} />
                        </div>
                        <div className="prod-item">
                            <h4 className="prod-name"><Link to="/productdetails" target="_blank">Product3</Link></h4>
                        </div>
                    </li>
                    <li>
                    <div className="img-div">
                            <img className="prod-img" src={images['top4.jpg']} />
                        </div>
                        <div className="prod-item">
                            <h4 className="prod-name"><Link to="/productdetails" target="_blank">Product4</Link></h4>
                        </div>
                    </li>
                </ul>

                <Route path="/women/tops/productid" component={ProductDetails}></Route>
            </div>
        );
    }
}

export default ProductList;