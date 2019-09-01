import React from 'react';
import { Router, NavLink, Link, Route, Switch } from 'react-router-dom';

import ProductList from './productlist';
import '../css/productlist.css';

class Women extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div class="container">
                <ProductCategoryNav></ProductCategoryNav>
                </div>
                <div class="container">
                 <Switch>
                    <Route path="/" component={ProductList} />
                    <Route path="/products/women/tops" component={ProductList} />
                    <Route path="/products/women/jeans" component={ProductList} />
                    <Route path="/products/women/trousers" component={ProductList} />
                    <Route path="/products/women/heels" component={ProductList} />
                </Switch>
                </div>
            </div>
        );
    }
}

class ProductCategoryNav extends React.Component {
    render() {
        return (
            <div className="prod-links">
                    <li><NavLink to="/products/women/tops" className="prod-link">Tops</NavLink></li>
                    <li><NavLink to="/products/women/jeans" className="prod-link">Jeans</NavLink></li>
                    <li><NavLink to="/products/women/trousers" className="prod-link">Trousers</NavLink></li>
                    <li><NavLink to="/products/women/heels" className="prod-link">Heels</NavLink></li>
            </div>
        );
    }
}

/*class Tops extends React.Component {

    state = {
        productCategory : null
    }

    componentDidMount () {
        const { productCategory } = this.props.match.params
    
        fetch(`http://localhost:3000/women/tops/${productCategory}`)
          .then((productCategory) => {
            this.setState(() => ({ productCategory }))
          })
      }

    render() {
        return (
            <div>
                <p>product category</p>

            </div>
        );
    }
}*/

export default Women;
