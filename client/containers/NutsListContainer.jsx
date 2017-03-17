import { connect } from 'react-redux';
import NutsList from '../components/NutsList';
import { getNutsFromState } from '../actions/NutsActions';

const mapStateToProps = store => ({
  nutsList: getNutsFromState(store),
});

export default connect(mapStateToProps)(NutsList);
