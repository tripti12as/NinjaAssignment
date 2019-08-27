import React from 'react';
import { Router, NavLink, Link, Route, Switch } from 'react-router-dom';

class Men extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ul>
            <li><NavLink exact to="/">Shirts</NavLink></li>
            <li><NavLink to="/">Jeans</NavLink></li>
            <li><NavLink to="/">Trousers</NavLink></li>
            <li><NavLink to="/">Shoes</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Men;
