import { getCookie } from '../../utils/utils';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  PASSWORD_FORGOT_REQUEST,
  PASSWORD_FORGOT_SUCCESS,
  PASSWORD_FORGOT_FAILED,
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILED,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILED,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILED,
  VERIFY_AUTHORIZATION_REQUEST,
  VERIFY_AUTHORIZATION_SUCCESS,
  VERIFY_AUTHORIZATION_FAILED,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILED,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILED,
} from '../actions/user';

const initialUserState = {
  user: null,
  isAuthenticated: false,
  accessToken: null,

  registerRequest: false,
  registerSuccess: false,
  registerFailed: false,

  getUserRequest: false,
  getUserSuccess: false,
  getUserFailed: false,

  passwordRecoverySuccess: null,
  passwordResetSuccess: null,

  passwordForgotRequest: false,
  passwordForgotFailed: false,

  passwordResetRequest: false,
  passwordResetFailed: false,

  editUserRequest: false,
  editUserSuccess: false,
  editUserFailed: false,

  refreshTokenRequest: false,
  refreshTokenSuccess: false,
  refreshTokenFailed: false,

  verifyAuthorizationRequest: false,
  verifyAuthorizationSuccess: false,
  // verifyAuthorizationFailed: false,

  logInRequest: false,
  logInSuccess: false,
  logInFailed: false,

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
        isAuthenticated: action.success,
        accessToken: action.accessToken,
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
    case GET_USER_REQUEST: {
      return {
        ...state,
        getUserRequest: true,
        getUserSuccess: false,
        getUserFailed: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        getUserRequest: false,
        getUserSuccess: true,
        getUserFailed: false,
        isAuthenticated: action.success,
        accessToken: action.accessToken,
        user: action.user
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        getUserRequest: false,
        getUserSuccess: false,
        getUserFailed: true,
      };
    }
    case PASSWORD_FORGOT_REQUEST: {
      return {
        ...state,
        passwordForgotRequest: true,
        passwordForgotFailed: false,
      };
    }
    case PASSWORD_FORGOT_SUCCESS: {
      return {
        ...state,
        passwordForgotRequest: false,
        passwordForgotFailed: false,
        passwordRecoverySuccess: action.success
      };
    }
    case PASSWORD_FORGOT_FAILED: {
      return {
        ...state,
        passwordForgotRequest: false,
        passwordForgotFailed: true,
      };
    }
    case PASSWORD_RESET_REQUEST: {
      return {
        ...state,
        passwordResetRequest: false,
        passwordResetFailed: false,
      };
    }
    case PASSWORD_RESET_SUCCESS: {
      return {
        ...state,
        passwordResetRequest: false,
        passwordResetFailed: false,
        passwordResetSuccess: action.success
      };
    }
    case PASSWORD_RESET_FAILED: {
      return {
        ...state,
        passwordResetRequest: false,
        passwordResetFailed: false,
      };
    }
    case EDIT_USER_REQUEST: {
      return {
        ...state,
        editUserRequest: true,
        editUserSuccess: false,
        editUserFailed: false,
      };
    }
    case EDIT_USER_SUCCESS: {
      return {
        ...state,
        editUserRequest: false,
        editUserSuccess: true,
        editUserFailed: false,
        user: action.user
      };
    }
    case EDIT_USER_FAILED: {
      return {
        ...state,
        editUserRequest: false,
        editUserSuccess: false,
        editUserFailed: true,
      };
    }
    case REFRESH_TOKEN_REQUEST: {
      return {
        ...state,
        refreshTokenRequest: true,
        refreshTokenSuccess: false,
        refreshTokenFailed: false,
      };
    }
    case REFRESH_TOKEN_SUCCESS: {
      return {
        ...state,
        refreshTokenRequest: false,
        refreshTokenSuccess: true,
        refreshTokenFailed: false,
      };
    }
    case REFRESH_TOKEN_FAILED: {
      return {
        ...state,
        refreshTokenRequest: false,
        refreshTokenSuccess: false,
        refreshTokenFailed: true,
      };
    }
    case VERIFY_AUTHORIZATION_REQUEST: {
      return {
        ...state,
        verifyAuthorizationRequest: true,
        verifyAuthorizationSuccess: false,
        verifyAuthorizationFailed: false,
      };
    }
    case VERIFY_AUTHORIZATION_SUCCESS: {
      return {
        ...state,
        verifyAuthorizationRequest: false,
        verifyAuthorizationSuccess: true,
        verifyAuthorizationFailed: false,
      };
    }
    // case VERIFY_AUTHORIZATION_FAILED: {
    //   return {
    //     ...state,
    //     verifyAuthorizationRequest: false,
    //     verifyAuthorizationSuccess: false,
    //     verifyAuthorizationFailed: true,
    //   };
    // }
    case LOG_IN_REQUEST: {
      return {
        ...state,
        logInRequest: true,
        logInSuccess: false,
        logInFailed: false,
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        logInRequest: false,
        logInSuccess: true,
        logInFailed: false,
        isAuthenticated: action.success,
        accessToken: action.accessToken,
        user: action.user
      };
    }
    case LOG_IN_FAILED: {
      return {
        ...state,
        logInRequest: false,
        logInSuccess: false,
        logInFailed: true,
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
        isAuthenticated: false,
        accessToken: null,
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