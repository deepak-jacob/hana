import * as types from '../constants/ActionTypes';

const initialState = {
  appDrawerOpen: false,
};

const env = (state = initialState, action) => {
  switch (action.type) {
    case types.APP_DRAWER_TOGGLE:
      return { ...state, appDrawerOpen: !state.appDrawerOpen };
    default:
      return state;
  }
};

export default env;
