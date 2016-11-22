import React, { Component } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class App extends Component {
  render() {
    return (
      <div>

        <AppBar
         title="HANA EXPORTS"
         iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

        <Card>
          <CardMedia>
            <img src="http://i.ebayimg.com/00/s/ODM3WDE2MDA=/z/T3cAAOSwpDdVbUJJ/$_10.JPG?set_id=880000500F" />
          </CardMedia>
        </Card>

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
