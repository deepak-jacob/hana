import { connect } from 'react-redux';
import App from '../components/App';
import { getAppDrawerOpenState, handleToggle } from '../actions/EnvActions';

const mapStateToProps = store => ({
  appDrawerOpen: getAppDrawerOpenState(store),
});

export default connect(mapStateToProps, { handleToggle })(App);
