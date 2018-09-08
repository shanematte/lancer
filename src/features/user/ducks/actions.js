import { ajaxRequest } from 'utils/api-adapter';
import { SessionToken } from 'utils/session';
import { ERROR } from 'redux/actions/';
import { push } from 'react-router-redux';

export const USER_DATA_REQUESTED = 'USER_DATA_REQUESTED';
export const USER_DATA_RECEIVED = 'USER_DATA_RECEIVED';
export const CHANGE_SUCCESSFUL = 'CHANGE_SUCCESSFUL';
export const WALLET_CHANGE_SUCCESSFUL = 'WALLET_CHANGE_SUCCESSFUL';
export const STATUS_PROFILE_MENU = 'STATUS_PROFILE_MENU';
export const SORT_STATUS_TASKS = 'SORT_STATUS_TASKS';

export const getUserData = () => dispatch => {
  dispatch({ type: USER_DATA_REQUESTED });
  ajaxRequest('/user/', {}, SessionToken.get())
    .then(response => {
      dispatch({
        type: USER_DATA_RECEIVED,
        payload: response,
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ERROR,
        payload: { ...error },
      });
    });
};

export const getStatusProfileMenu = () => dispatch => {
  dispatch({
    type: STATUS_PROFILE_MENU,
    payload: { ...error },
  });
};

export const editUser = data => dispatch => {

  ajaxRequest('/user/', { method: 'PATCH', body: {
      username:data.username,
      email:data.email,
      avatar:data.avatar,
      passwords: {
        old_password:data.passwords.old_password, 
        new_password:data.passwords.new_password, 
      },
  }}, SessionToken.get())
    .then(response => {
      dispatch({
        type: CHANGE_SUCCESSFUL,
        payload: response,
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ERROR,
        payload: { ...error },
      });
    });

};

export const editWallet = (id, data) => dispatch => {
  ajaxRequest(
    `/wallets/${id}/`,
    { method: 'PATCH', body: data },
    SessionToken.get(),
  )
    .then(() => {
      dispatch({
        type: WALLET_CHANGE_SUCCESSFUL,
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ERROR,
        payload: { ...error },
      });
    });
};
