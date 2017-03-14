import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';

const styleWrapperDiv = {
  margin: '10px',
  padding: '10px',
};

const required = value => (value == null ? 'Required' : undefined);

const Login = ({ login, handleSubmit }) => (

  <form style={styleWrapperDiv} onSubmit={handleSubmit(login)}>

    <p>
      <Field
        key="username" component={TextField}
        hintText="Username" name="username"
        validate={required}
      />
    </p>

    <p>
      <Field
        key="password" component={TextField}
        hintText="Password" name="password"
        validate={required} type="password"
      />
    </p>

    <br />
    <RaisedButton type="submit" label="Submit" primary />

  </form>

);

Login.propTypes = {
  login: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'Login',
})(Login);
