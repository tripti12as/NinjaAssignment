import React from 'react';
import { Router, NavLink, Link, Route, Switch } from 'react-router-dom';

import './App.css';
import Men from './Components/men';
import Women from './Components/women';
import HomeLiving from './Components/homeliving';
import MyCart from './Components/mycart';

const Home = () => <h3>Welcome to Online Shopping!</h3>;

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>

        <h1 className="header">Online Shopping Portal</h1>
        <NavLinks></NavLinks>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/men" component={Men} />
          <Route path="/products/women" component={Women} />
          <Route path="/homeliving" component={HomeLiving} />
          <Route path="/mycart" component={MyCart} />
        </Switch>
      </div>
    );
  }
}

class NavLinks extends React.Component {
  render() {
    return (
      <div className="links">
        <NavLink exact to="/" className="link" activeClassName="active">HOME</NavLink>
        <NavLink to="/men" className="link">MEN</NavLink>
        <NavLink to="/products/women" className="link">WOMEN</NavLink>
        <NavLink to="/homeliving" className="link">HOME & LIVING</NavLink>
        <NavLink to="/mycart" className="link">My Cart</NavLink>
      </div>
    );
  }
}

export default App;
