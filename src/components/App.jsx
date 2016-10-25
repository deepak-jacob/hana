import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <ul role="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/nutsList">Nuts List</Link></li>
          <li><Link to="/nutsAdd">Nuts Add</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
