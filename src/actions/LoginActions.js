import fetch from 'isomorphic-fetch';

export const login = formValues => () => {
  const formData = Object.keys(formValues)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(formValues[k])}`)
    .join('&');

  console.log(formData); // eslint-disable-line

  fetch('/rcnuts404', {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json, application/xml, text/plain, text/html, *.*',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
  });
};

export default login;
