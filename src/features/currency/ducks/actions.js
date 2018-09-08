import { getUserData } from 'features/user/ducks/actions';
import { ajaxRequest } from 'utils/api-adapter';
import { SessionToken } from 'utils/session';

export const CHANGE_WALLET = 'CHANGE_WALLET';
export const ERROR = 'ERROR';
export const WITHDRAW = 'WITHDRAW';


export const setWallet = (wallet) => dispatch => {
  dispatch({ type: CHANGE_WALLET, payload: wallet });
};


export const withdraw = (amount, walletId) => dispatch => {
  ajaxRequest(
    `/wallets/${walletId}/withdraw/`,
    { method: 'PATCH', body: { amount } },
    SessionToken.get(),
  )
    .then(response => {
      dispatch(getUserData());
      dispatch({
        type: WITHDRAW,
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
