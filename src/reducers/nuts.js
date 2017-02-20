import * as types from '../constants/ActionTypes';

const nuts = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_NUTS:
      return [...action.nuts];
    default:
      return state;
  }
};

export default nuts;
