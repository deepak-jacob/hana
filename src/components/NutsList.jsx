import React, { Component } from 'react';
import _ from 'lodash';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const keysToDisplay = {
  arrivalDate: 'Arrival Date',
  //company: 'Company',
  //email: 'E-mail',
  mark: 'Mark',
  nutCount: 'Nut Count',
  outurn: 'Outurn',
  //phone: 'Phone',
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
  <Table>
  <TableHeader>
    <TableRow>
        { _.map(keysToDisplay, (val, key) => <TableHeaderColumn>{val}</TableHeaderColumn> )}
    </TableRow>
  </TableHeader>
  <TableBody>
    {nutsList.map(item => (
      <TableRow key={item._id}>
        {_.map(keysToDisplay, (val, key) => <TableRowColumn>{item[key]}</TableRowColumn> )}
      </TableRow>
    ))}
  </TableBody>
  </Table>
)

module.exports = NutsList;
