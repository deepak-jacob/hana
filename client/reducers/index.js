import { combineReducers } from 'redux';
import nuts from './nuts';
import env from './env';

const rootReducer = combineReducers({
  nuts,
  env,
});

export default rootReducer;
