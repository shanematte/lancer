import { USER_DATA_RECEIVED, USER_DATA_REQUESTED, CHANGE_SUCCESSFUL, WALLET_CHANGE_SUCCESSFUL, STATUS_PROFILE_MENU, SORT_STATUS_TASKS } from './actions';

const initialState = {
  id: 0,
  username: '',
  email: '',
  avatar: '',
  created_at: '',
  last_login: '',
  modified_at: '',
  rating: '',
  wallets: [],
  statusProfileMenu:false,
  statusTaskFilter:0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA_REQUESTED:
      return {
        ...state,
        // TODO Show spinner here
      };

    case WALLET_CHANGE_SUCCESSFUL:
      return {
        ...state,
        // TODO something
      };

    case SORT_STATUS_TASKS:
      return {
        ...state,
        statusTaskFilter:action.statusTaskFilter
      };

    case STATUS_PROFILE_MENU:
      return {
        ...state,
        statusProfileMenu:!state.statusProfileMenu
      };

    case USER_DATA_RECEIVED:
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
        avatar: action.payload.avatar,
        wallets: action.payload.wallets,
      };

    case CHANGE_SUCCESSFUL:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};
