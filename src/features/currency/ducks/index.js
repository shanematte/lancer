import { CHANGE_WALLET, WITHDRAW } from './actions';


const initialState = {
  wallet: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_WALLET:
      return {
        ...state,
        wallet: action.payload,
      };
    default:
      return state;
  }
};
