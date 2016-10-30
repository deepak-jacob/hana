import * as types from '../constants/ActionTypes'

const receiveNuts = nuts => ({
  type: types.RECEIVE_NUTS,
  nuts: nuts
})

export const getAllNuts = () => dispatch => {
  fetch('/rcnuts')
    .then((response) => (response.json()))
    .then((json) => {
      dispatch(receiveNuts(json))
    });
}
