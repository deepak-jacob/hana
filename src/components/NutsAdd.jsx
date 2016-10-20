import React, { Component } from 'react';
import _ from 'lodash';

const keysToDisplay = {
  arrivalDate: 'Arrival Date',
  company: 'Company',
  email: 'E-mail',
  mark: 'Mark',
  nutCount: 'Nut Count',
  outurn: 'Outurn',
  phone: 'Phone',
  port: 'Port',
  price: 'Price',
  quantity: 'Quantity'
};

class NutsAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange(name, e) {
    let change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  render() {
    return (
      <div>
      { _.map(keysToDisplay, (val, key) => {
        return <input type="text" />
      }) }
      </div>
    );
  }
}

module.exports = NutsAdd;
