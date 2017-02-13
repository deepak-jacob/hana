import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import _ from 'lodash';
import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle,
  DatePicker
} from 'redux-form-material-ui';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

const keysToDisplay = {
  company: { label: 'Company', component: TextField },
  email: { label: 'E-mail', component: TextField },
  phone: { label: 'Phone', component: TextField },
  port: { label: 'Port', component: TextField },
  arrivalDate: { label: 'Arrival Date', component: DatePicker },
  price: { label: 'Price', component: TextField },
  quantity: { label: 'Quantity', component: TextField },
  mark: { label: 'Mark', component: TextField },
  nutCount: { label: 'Nut Count', component: TextField },
  outurn: { label: 'Outurn', component: TextField }
};

const styleWrapperDiv = {
  margin: '10px',
  padding: '10px'
};

let NutsAddForm = ({ saveNut }) => (
    <form style={styleWrapperDiv}>
        { _.map(keysToDisplay, (val, key) => {
          return <div><Field key={key} component={val.component} hintText={val.label}
            name={key}
            /> </div>
        }) }
      <br />
      <RaisedButton label="Submit" primary={true} onClick={saveNut} />
    </form>
)

NutsAddForm = reduxForm({
  form: 'NutsAddForm'
})(NutsAddForm)

export default NutsAddForm;
