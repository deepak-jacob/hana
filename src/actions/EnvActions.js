import * as types from '../constants/ActionTypes'

export const getAppDrawerOpenState = (state) => state.hanaReducers.env.appDrawerOpen;

const toggleAppDrawer = appDrawerOpen => ({
  type: types.APP_DRAWER_TOGGLE,
  appDrawerOpen
})

export const handleToggle = () => (dispatch, getState) => {
  const currentState = getState();
  return dispatch(toggleAppDrawer(!currentState.hanaReducers.env.appDrawerOpen));
}
