import React, { Component } from 'react';
import _ from 'lodash';

const AttrToDisplay = {
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

class NutsList extends Component {

  constructor(props) {
    super(props);
    this.state = {dataArray: []};
  }

  componentDidMount() {
    fetch('/rcnuts')
      .then((response) => (response.json()))
      .then((json) => {
        this.setState({dataArray: json})
      });
  }

  render() {
    return (
      <table><thead>
      <tr>
          {_.map(AttrToDisplay, (val, key) => {
            return <th>{val}</th>
          })}
      </tr>
      </thead><tbody>
      {this.state.dataArray.map(item => (
        <tr>
          {_.map(AttrToDisplay, (val, key) => {
            return <td>{item[key]}</td>
          })}
        </tr>
      ))}
      </tbody>
      </table>
    );
  }
}

module.exports = NutsList;
