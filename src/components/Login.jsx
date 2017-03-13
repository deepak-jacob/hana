import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import _ from 'lodash';

const keysToDisplay = {
  company: { label: 'Username', component: TextField },
  email: { label: 'Password', component: TextField },
};

const styleWrapperDiv = {
  margin: '10px',
  padding: '10px',
};

const required = value => (value == null ? 'Required' : undefined);

const Login = ({ login }) => (
  <form style={styleWrapperDiv} onSubmit={login()}>
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

Login.propTypes = {
  login: React.PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'Login',
})(Login);
