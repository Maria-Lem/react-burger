import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  PASSWORD_FORGOT_REQUEST,
  PASSWORD_FORGOT_SUCCESS,
  PASSWORD_FORGOT_FAILED,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILED,
} from '../actions/user';

const initialUserState = {
  user: null,

  registerRequest: false,
  registerSuccess: false,
  registerFailed: false,

  passwordRecoverySuccess: null,

  passwordForgotRequest: false,
  passwordForgotSuccess: false,
  passwordForgotFailed: false,

  logOutRequest: false,
  logOutSuccess: false,
  logOutFailed: false,
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
    case PASSWORD_FORGOT_REQUEST: {
      return {
        ...state,
        passwordForgotRequest: true,
        passwordForgotSuccess: false,
        passwordForgotFailed: false,
      };
    }
    case PASSWORD_FORGOT_SUCCESS: {
      return {
        ...state,
        passwordForgotRequest: false,
        passwordForgotSuccess: true,
        passwordForgotFailed: false,
        passwordRecoverySuccess: action.success
      };
    }
    case PASSWORD_FORGOT_FAILED: {
      return {
        ...state,
        passwordForgotRequest: false,
        passwordForgotSuccess: false,
        passwordForgotFailed: true,
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        logOutRequest: true,
        logOutSuccess: false,
        logOutFailed: false,
      };
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        logOutRequest: false,
        logOutSuccess: true,
        logOutFailed: false,
        user: null,
      };
    }
    case LOG_OUT_FAILED: {
      return {
        ...state,
        logOutRequest: false,
        logOutSuccess: false,
        logOutFailed: true,
      };
    }
    default: {
      return state;
    }
  }
}