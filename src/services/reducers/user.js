import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED
} from '../actions/user';

const initialUserState = {
  user: null,

  registerRequest: false,
  registerSuccess: false,
  registerFailed: false,
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
        registerSuccess: false,
        registerFailed: false,
      };
    }
    case USER_REGISTER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        registerRequest: false,
        registerSuccess: true,
        registerFailed: false,
      };
    }
    case USER_REGISTER_FAILED: {
      return {
        ...state,
        registerRequest: false,
        registerSuccess: false,
        registerFailed: true,
      };
    }
    default: {
      return state;
    }
  }
}