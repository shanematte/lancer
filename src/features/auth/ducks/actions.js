import { ajaxRequest } from 'utils/api-adapter';
import { SessionToken } from 'utils/session';
import { push } from 'react-router-redux';
import { getUserData } from 'features/user/ducks/actions';

export const UPDATE_AUTH_TOKEN = 'UPDATE_AUTH_TOKEN';
export const CLEAR_AUTH_TOKEN = 'CLEAR_AUTH_TOKEN';
export const AUTH_ERROR = 'AUTH_ERROR';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const SWITCH_PAGE = 'SWITCH_PAGE';


export const userLogin = (email, password) => dispatch => {
  ajaxRequest('/auth/login/', {
    method: 'POST',
    body: { email, password },
  })
    .then(response => {
      SessionToken.set(response.key);
      dispatch({ type: UPDATE_AUTH_TOKEN, token: response.key });
      dispatch(getUserData());
      dispatch(push('/'));
    })
    .catch(error => {
      dispatch({
        type: AUTH_ERROR,
        payload: { stage: 'auth', errors: error },
      });
    });
};


export const OAuthLogin = (provider, tokens) => {
  if (provider == 'twitter') {
    return dispatch => {
      if (!tokens.key) {
        if (tokens.detail) {
          dispatch({ type: SWITCH_PAGE, page: 'checkEmail' });
        } else {
          dispatch({
            type: REGISTRATION_ERROR,
            payload: { stage: 'auth', errors: tokens },
          });
        }
      } else {
        SessionToken.set(tokens.key);
        dispatch(getUserData());
        dispatch(push('/search/'));
        window.location.reload();
      }
    };
  }
  return dispatch => {
    ajaxRequest(`/auth/social/${provider}/`, {
      method: 'POST',
      body: tokens,
    })
      .then(response => {
        SessionToken.set(response.key);
        dispatch({ type: UPDATE_AUTH_TOKEN, token: response.key });
        dispatch(getUserData());
        dispatch(push('/search/'));
        window.location.reload();
      })
      .catch(error => {
        if (error.status == 403) {
          dispatch({ type: SWITCH_PAGE, page: 'checkEmail' });
        } else {
          dispatch({
            type: REGISTRATION_ERROR,
            payload: { stage: 'auth', errors: error },
          });
        }
      });
  };
};


export const registration = (username, email, password1, password2) => dispatch => {
  ajaxRequest('/auth/registration/', {
    method: 'POST',
    body: {
      username, email, password1, password2,
    },
  })
    .then(response => {
      dispatch({
        type: REGISTRATION_SUCCESS,
        payload: { stage: 'auth', success: true },
      });
    })
    .catch(error => {
      dispatch({
        type: REGISTRATION_ERROR,
        payload: { stage: 'auth', success: false, errors: error },
      });
    });
};


export const userLogout = () => dispatch => {
  SessionToken.remove();
  dispatch({ type: CLEAR_AUTH_TOKEN });
  dispatch(push('/auth'));
};

export const clearError = () => dispatch => dispatch({ type: CLEAR_ERROR, stage: 'auth' });
