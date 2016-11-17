import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
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

let NutsAddForm = ({ saveNut }) => (
    <form>
    { _.map(keysToDisplay, (val, key) => {
      return <Field key={key} type="text" placeholder={val} style={{display:'block', margin: '5px 0'}}
        component="input"
        name={key}
        />
    }) }
    <button type="button" onClick={saveNut}> Submit</button>
    </form>
)

NutsAddForm = reduxForm({
  form: 'NutsAddForm'
})(NutsAddForm)

export default NutsAddForm;
