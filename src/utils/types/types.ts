import {
  IWsRequest,
  IWsOpen,
  IWsError,
  IWsClosed,
  IWsGetMessage,
} from '../interfaces/ws';
import {
  IAddIngredient,
  IDeleteIngredient,
  IReorderFilling,
  IResetBurger,
} from '../interfaces/burgerConstructor';
import {
  ISetIngredientDetail,
  IRemoveIngredientDetail,
} from '../interfaces/ingredient';
import {
  IGetIngredientsRequest,
  IGetIngredientsSuccess,
  IGetIngredientsFailed,
} from '../interfaces/ingredients';
import {
  ICreateOrderRequest,
  ICreateOrderSuccess,
  ICreateOrderFailed,
} from '../interfaces/order';
import {
  IRegisterRequest,
  IRegisterSuccess,
  IRegisterFailed,
  IGetUserRequest,
  IGetUserSuccess,
  IGetUserFailed,
  IPasswordForgotRequest,
  IPasswordRecoverySuccess,
  IPasswordForgotFailed,
  IPasswordResetRequest,
  IPasswordResetSuccess,
  IPasswordResetFailed,
  IEditUserRequest,
  IEditUserSuccess,
  IEditUserFailed,
  IRefreshTokenRequest,
  IRefreshTokenSuccess,
  IRefreshTokenFailed,
  ILogInRequest,
  ILogInSuccess,
  ILogInFailed,
  ILogOutRequest,
  ILogOutSuccess,
  ILogOutFailed,
  IResetPasswordRecoveryReducers,
} from '../interfaces/user';

export type TGetIngredientsActions = 
  | IGetIngredientsRequest
  | IGetIngredientsSuccess
  | IGetIngredientsFailed;

export type TIngredientDetailActions = 
  | ISetIngredientDetail
  | IRemoveIngredientDetail;

export type TBurgerConstructorActions = 
  | IAddIngredient
  | IDeleteIngredient
  | IReorderFilling
  | IResetBurger;

export type TCreateOrderActions = 
  | ICreateOrderRequest
  | ICreateOrderSuccess
  | ICreateOrderFailed;

  export type TUserActions = 
  | IRegisterRequest
  | IRegisterSuccess
  | IRegisterFailed
  | IGetUserRequest
  | IGetUserSuccess
  | IGetUserFailed
  | IPasswordForgotRequest
  | IPasswordRecoverySuccess
  | IPasswordForgotFailed
  | IPasswordResetRequest
  | IPasswordResetSuccess
  | IPasswordResetFailed
  | IEditUserRequest
  | IEditUserSuccess
  | IEditUserFailed
  | IRefreshTokenRequest
  | IRefreshTokenSuccess
  | IRefreshTokenFailed
  | ILogInRequest
  | ILogInSuccess
  | ILogInFailed
  | ILogOutRequest
  | ILogOutSuccess
  | ILogOutFailed
  | IResetPasswordRecoveryReducers;

export type TWsAction = 
  | IWsRequest
  | IWsOpen
  | IWsError
  | IWsClosed
  | IWsGetMessage;