import fetch from 'isomorphic-fetch';
import * as types from '../constants/ActionTypes';

const receiveNuts = nuts => ({
  type: types.RECEIVE_NUTS,
  nuts,
});

export const fetchAllNuts = () => (dispatch) => {
  fetch('/rcnuts')
    .then(response => (response.json()))
    .then((json) => {
      dispatch(receiveNuts(json));
    });
};

export const saveNut = formValues => () => {
  const formData = Object.keys(formValues)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(formValues[k])}`)
    .join('&');

  fetch('/rcnuts', {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json, application/xml, text/plain, text/html, *.*',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
  });
};

export const getNutsFromState = state => state.hanaReducers.nuts;
