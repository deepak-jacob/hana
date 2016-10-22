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

  handleSubmit(e) {

    let formData = Object.keys(this.state).map((k) => {
        return encodeURIComponent(k) + '=' + encodeURIComponent(this.state[k])
    }).join('&');

    fetch('/rcnuts', {
      method: 'POST',
      body: formData,
      headers: {
       'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
       'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
       }
    });

  }

  render() {
    return (
      <div>
      { _.map(keysToDisplay, (val, key) => {
        return <input type="text" placeholder={val} style={{display:'block', margin: '5px 0'}}
          value={this.state[key]}
          onChange={this.handleChange.bind(this, key)} />
      }) }
      <button onClick={this.handleSubmit.bind(this)}> Submit</button>
      </div>
    );
  }
}

module.exports = NutsAdd;
