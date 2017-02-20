import * as types from '../constants/ActionTypes';

export const getAppDrawerOpenState = state => state.hanaReducers.env.appDrawerOpen;

const toggleAppDrawer = () => ({
  type: types.APP_DRAWER_TOGGLE,
});

export const handleToggle = () => dispatch => dispatch(toggleAppDrawer());
