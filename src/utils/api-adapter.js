import invariant from 'invariant';
import transform from 'lodash/transform';
import { push } from 'react-router-redux';
import { SessionToken } from './session';


export function ajaxRequest(url, options, token = null) {
  let newUrl = url;
  invariant(typeof options !== 'string', `It looks like you're using a an outdated method of calling a ajaxRequest.
Change it to ajaxRequest(url: string, options: object, tocken: string)
For example ajaxRequest('/auth/user/', { method: 'POST', body: { username: 'New username' }}, 'AuthToken')`);

  const tokenPrefix = 'Token';
  const authUrl = '/auth';
  if (process.env.NODE_ENV === 'production') {
    newUrl = `https://api.lancer.network${newUrl}`;
  } else {
    newUrl = `/api${newUrl}`;
  }

  const _options = {
    ...options,
    cache: 'no-cache',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods' : 'GET,POST,PATCH,PUT,DELETE,OPTIONS',
    },
  };

  if (_options.body) {
    _options.body = JSON.stringify(_options.body);
  }

  if (token) {
    _options.headers.Authorization = `${tokenPrefix} ${token}`;
  }

  return fetch(newUrl, _options)
    .then(response => response.text().then(text => {
      let payload = text;

      if (response.headers.get('Content-Type') === 'application/json') {
        try {
          payload = JSON.parse(text);
        } catch (e) {
          console.warn('Can\'t parse response as JSON:', text);
          payload = text;
        }
      }

      return { response, payload };
    }))
    .then(({ response, payload }) => {
      if (!response.ok) {
        if (response.status === 401) {
          SessionToken.remove();
          push(authUrl);
        }
        return Promise.reject({
          status: response.status,
          ...payload,
        });
      }

      return Promise.resolve(payload);
    });
}

export function compileQuery(data) {
  const query = transform(data, (result, value, key) => result.push([key, value].join('=')), []).join('&');

  return query ? `?${query}` : '';
}
