import React from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import {
  TextField,
  DatePicker,
} from 'redux-form-material-ui';
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
  outurn: { label: 'Outurn', component: TextField },
};

const styleWrapperDiv = {
  margin: '10px',
  padding: '10px',
};

const required = value => (value == null ? 'Required' : undefined);

const NutsAddForm = ({ saveNut, handleSubmit }) => (
  <form style={styleWrapperDiv} onSubmit={handleSubmit(saveNut)}>
    { _.map(
          keysToDisplay,
          (val, key) =>
            <div>
              <Field
                key={key}
                component={val.component}
                hintText={val.label}
                name={key}
                validate={required}
              />
            </div>
          ,
        )
    }
    <br />
    <RaisedButton type="submit" label="Submit" primary />
  </form>
);

NutsAddForm.propTypes = {
  saveNut: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'NutsAddForm',
})(NutsAddForm);
