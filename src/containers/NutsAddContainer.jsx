import { connect } from 'react-redux';
import NutsAdd from '../components/NutsAdd';
import { saveNut } from '../actions/NutsActions';

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { saveNut })(NutsAdd);
