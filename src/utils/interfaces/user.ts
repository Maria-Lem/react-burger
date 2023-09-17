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
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILED,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILED,
  RESET_PASSWORD_RECOVERY_REDUCERS,
} from '../../services/constants/user';

import { IUser } from './data';

export interface IUserState {
  user: IUser | null;

  registerRequest: boolean;
  registerSuccess: boolean;
  registerFailed: boolean;

  getUserRequest: boolean;
  getUserSuccess: boolean;
  getUserFailed: boolean;

  passwordForgotRequest: boolean;
  passwordRecoverySuccess: boolean | null;
  passwordForgotFailed: boolean;
  
  passwordResetRequest: boolean;
  passwordResetSuccess: boolean | null;
  passwordResetFailed: boolean;

  editUserRequest: boolean;
  editUserSuccess: boolean;
  editUserFailed: boolean;

  refreshTokenRequest: boolean;
  refreshTokenSuccess: boolean;
  refreshTokenFailed: boolean;

  logInRequest: boolean;
  logInSuccess: boolean;
  logInFailed: boolean;

  logOutRequest: boolean;
  logOutSuccess: boolean;
  logOutFailed: boolean;
}

export interface IRegisterRequest {
  readonly type: typeof USER_REGISTER_REQUEST;
}

export interface IRegisterSuccess {
  readonly type: typeof USER_REGISTER_SUCCESS;
  readonly user: IUser;
}

export interface IRegisterFailed {
  readonly type: typeof USER_REGISTER_FAILED;
}

export interface IGetUserRequest {
  readonly type: typeof GET_USER_REQUEST;
}

export interface IGetUserSuccess {
  readonly type: typeof GET_USER_SUCCESS;
  readonly user: IUser;
}

export interface IGetUserFailed {
  readonly type: typeof GET_USER_FAILED;
}

export interface IPasswordForgotRequest {
  readonly type: typeof PASSWORD_FORGOT_REQUEST;
}

export interface IPasswordRecoverySuccess {
  readonly type: typeof PASSWORD_FORGOT_SUCCESS;
  readonly success: boolean;
}

export interface IPasswordForgotFailed {
  readonly type: typeof PASSWORD_FORGOT_FAILED;
}

export interface IPasswordResetRequest {
  readonly type: typeof PASSWORD_RESET_REQUEST;
}

export interface IPasswordResetSuccess {
  readonly type: typeof PASSWORD_RESET_SUCCESS;
  readonly success: boolean;
}

export interface IPasswordResetFailed {
  readonly type: typeof PASSWORD_RESET_FAILED;
}

export interface IEditUserRequest {
  readonly type: typeof EDIT_USER_REQUEST;
}

export interface IEditUserSuccess {
  readonly type: typeof EDIT_USER_SUCCESS;
  readonly user: IUser;
}

export interface IEditUserFailed {
  readonly type: typeof EDIT_USER_FAILED;
}

export interface IRefreshTokenRequest {
  readonly type: typeof REFRESH_TOKEN_REQUEST;
}

export interface IRefreshTokenSuccess {
  readonly type: typeof REFRESH_TOKEN_SUCCESS;
}

export interface IRefreshTokenFailed {
  readonly type: typeof REFRESH_TOKEN_FAILED;
}

export interface ILogInRequest {
  readonly type: typeof LOG_IN_REQUEST;
}

export interface ILogInSuccess {
  readonly type: typeof LOG_IN_SUCCESS;
  readonly user: IUser;
}

export interface ILogInFailed {
  readonly type: typeof LOG_IN_FAILED;
}

export interface ILogOutRequest {
  readonly type: typeof LOG_OUT_REQUEST;
}

export interface ILogOutSuccess {
  readonly type: typeof LOG_OUT_SUCCESS;
}

export interface ILogOutFailed {
  readonly type: typeof LOG_OUT_FAILED;
}

export interface IResetPasswordRecoveryReducers {
  readonly type: typeof RESET_PASSWORD_RECOVERY_REDUCERS;
}