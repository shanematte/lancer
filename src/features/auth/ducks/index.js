import {
  UPDATE_AUTH_TOKEN, CLEAR_AUTH_TOKEN, AUTH_ERROR,
  CLEAR_ERROR, REGISTRATION_ERROR, REGISTRATION_SUCCESS, SWITCH_PAGE,
} from './actions';

const initialState = {
  invalid: false,
  success: false,
  type: 'login',
  errors: {},
};

export default function authorization(state = initialState, action) {
  switch (action.type) {
    case UPDATE_AUTH_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case CLEAR_AUTH_TOKEN:
      return {
        ...initialState,
        token: false,
      };

    case AUTH_ERROR:
      return {
        ...state,
        ...action.payload,
        invalid: true,
      };

    case REGISTRATION_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    case REGISTRATION_ERROR:
      return {
        ...state,
        ...action.payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        invalid: false,
        errors: {},
      };

    case SWITCH_PAGE:
      return {
        ...state,
        page: action.page,
      };

    default:
      return state;
  }
}

