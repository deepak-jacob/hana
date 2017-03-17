import { connect } from 'react-redux';
import Login from '../components/Login';
import { login } from '../actions/LoginActions';

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { login })(Login);
