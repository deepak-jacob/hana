import React from 'react';
import _ from 'lodash';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const keysToDisplay = {
  arrivalDate: 'Arrival Date',
  // company: 'Company',
  // email: 'E-mail',
  mark: 'Mark',
  nutCount: 'Nut Count',
  outurn: 'Outurn',
  // phone: 'Phone',
  port: 'Port',
  price: 'Price',
  //quantity: 'Quantity',
};

const NutsList = ({ nutsList }) => (
  <Table>
    <TableHeader>
      <TableRow>
        { _.map(keysToDisplay, val => <TableHeaderColumn>{val}</TableHeaderColumn>) }
      </TableRow>
    </TableHeader>
    <TableBody>
      {nutsList.map(item => (
        /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }]*/
        <TableRow key={item._id}>
          {_.map(keysToDisplay, (val, key) => <TableRowColumn>{item[key]}</TableRowColumn>)}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

NutsList.propTypes = {
  nutsList: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      arrivalDate: React.PropTypes.string,
      mark: React.PropTypes.string,
      nutCount: React.PropTypes.string,
      outurn: React.PropTypes.string,
      port: React.PropTypes.string,
      price: React.PropTypes.string,
      quantity: React.PropTypes.string,
    }),
  ).isRequired,
};

export default NutsList;
