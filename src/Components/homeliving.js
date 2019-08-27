import React from 'react';
import { Router, NavLink, Link, Route, Switch } from 'react-router-dom';

class HomeLiving extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact to="/">Bedsheets</NavLink></li>
                    <li><NavLink to="/">Showpieces</NavLink></li>
                    <li><NavLink to="/">Lamps</NavLink></li>
                    <li><NavLink to="/">Pillows</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default HomeLiving;
