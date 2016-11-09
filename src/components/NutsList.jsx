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

const styleTable = {
  border: '1px solid green',
  borderCollapse: 'collapse'
};

const styleTd = {
  border: '1px solid green'
};

export const NutsList = ({ nutsList }) => (
  <table style={styleTable}>
  <thead>
    <tr>
        { _.map(keysToDisplay, (val, key) => <th style={styleTd}>{val}</th> )}
    </tr>
  </thead>
  <tbody>
    {nutsList.map(item => (
      <tr key={item._id}>
        {_.map(keysToDisplay, (val, key) => <td style={styleTd}>{item[key]}</td> )}
      </tr>
    ))}
  </tbody>
  </table>
)

module.exports = NutsList;
