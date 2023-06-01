import { register, forgotPasswordRequest, logOut, resetPasswordRequest, logIn, getUser, patchUser, refreshTokenRequest } from "../../utils/api";
import { deleteCookie, getCookie, setCookie } from "../../utils/utils";

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILED = 'USER_REGISTER_FAILED';
export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';
export const PASSWORD_FORGOT_REQUEST = 'PASSWORD_FORGOT_REQUEST';
export const PASSWORD_FORGOT_SUCCESS = 'PASSWORD_FORGOT_SUCCESS';
export const PASSWORD_FORGOT_FAILED = 'PASSWORD_FORGOT_FAILED';
export const PASSWORD_RESET_REQUEST = 'PASSWORD_RESET_REQUEST';
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';
export const PASSWORD_RESET_FAILED = 'PASSWORD_RESET_FAILED';
export const EDIT_USER_REQUEST = 'EDIT_USER_REQUEST';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_FAILED = 'EDIT_USER_FAILED';
export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILED = 'REFRESH_TOKEN_FAILED';
// export const VERIFY_AUTHORIZATION_REQUEST = 'VERIFY_AUTHORIZATION_REQUEST';
// export const VERIFY_AUTHORIZATION_SUCCESS = 'VERIFY_AUTHORIZATION_SUCCESS';
// export const VERIFY_AUTHORIZATION_FAILED = 'VERIFY_AUTHORIZATION_FAILED';
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILED = 'LOG_IN_FAILED';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILED = 'LOG_OUT_FAILED';
export const RESET_PASSWORD_RECOVERY_REDUCERS = 'RESET_PASSWORD_RECOVERY_REDUCERS';

export function createNewUser(email, password, name) {
  return function(dispatch) {
    dispatch({ type: USER_REGISTER_REQUEST });

    register(email, password, name)
      .then(data => {
        setCookie('accessToken', data.accessToken.split('Bearer ')[1]);
        localStorage.setItem('refreshToken', data.refreshToken);
        // console.log(data)
        dispatch({
          type: USER_REGISTER_SUCCESS,
          user: data.user,
          // isAuthenticated: data.success,
          // accessToken: data.accessToken
        });
      })
      .catch(error => {
        console.error('Error:', error);
        dispatch({ type: USER_REGISTER_FAILED });
      });
  }
}

export function getCurrentUser() {
  return function(dispatch) {
    dispatch({ type: GET_USER_REQUEST });

    getUser()
      .then(data => {
        dispatch({
          type: GET_USER_SUCCESS,
          user: data.user,
          // isAuthenticated: data.success,
        });
      })
      .catch((error) => {
        if (error === 'Error: 403' || error.message === 'jwt expired' || error.message === 'You should be authorised') {
          console.log(error);
          dispatch(refreshToken());
        } else {
          console.error('Error:', error);
          dispatch({ type: GET_USER_FAILED });
        }
      });
  }
}

export function forgotPassword(email) {
  return function(dispatch) {
    dispatch({ type: PASSWORD_FORGOT_REQUEST });

    forgotPasswordRequest(email)
      .then(data => {
        dispatch({
          type: PASSWORD_FORGOT_SUCCESS,
          success: data.success
        })
      })
      .catch(error => {
        console.error('Error:', error);
        dispatch({ type: PASSWORD_FORGOT_FAILED });
      })
  }
}

export function resetPassword(password, token) {
  return function(dispatch) {
    dispatch({ type: PASSWORD_RESET_REQUEST });

    resetPasswordRequest(password, token)
      .then(data => {
        dispatch({
          type: PASSWORD_RESET_SUCCESS,
          success: data.success
        });
      })
      .catch(error => {
        console.error('Error:', error);
        dispatch({ type: PASSWORD_RESET_FAILED });
      })
  }
}

export function editUser(name, email, password, accessToken) {
  return function(dispatch) {
    dispatch({ type: EDIT_USER_REQUEST });

    patchUser(name, email, password, accessToken)
      .then(data => {
        dispatch({
          type: EDIT_USER_SUCCESS,
          user: data.user
        })
      })
      .catch(error => {
        if (error === 'Error: 403' || error.message === 'jwt expired' || error.message === 'You should be authorised') {
          console.log('jwt expired');
          dispatch(refreshToken());
        } else {
          console.error('Error:', error);
          dispatch({ type: EDIT_USER_FAILED });
        }})
  }
}

export function refreshToken() {
  return function(dispatch) {
    dispatch({ type: REFRESH_TOKEN_REQUEST });

    refreshTokenRequest()
      .then(data => {
        // console.log('data: ', data);
        setCookie('accessToken', data.accessToken.split('Bearer ')[1]);
        localStorage.setItem('refreshToken', data.refreshToken);
        dispatch({ type: REFRESH_TOKEN_SUCCESS });
      })
      .catch(error => {
        console.error('Error:', error);
        dispatch({ type: REFRESH_TOKEN_FAILED });
      })
  }
}

// export function verifyAuthorization() {
//   return function(dispatch) {
//     dispatch({ type: VERIFY_AUTHORIZATION_REQUEST });

//     const accessToken = getCookie('accessToken');
//     console.log('accessToken: ', accessToken);

//     if (!!accessToken) {
//       dispatch(getCurrentUser({ accessToken: `Bearer ${accessToken}` }));
//     }

//     dispatch({ type: VERIFY_AUTHORIZATION_SUCCESS });
//   }
// }

export function logInUser(email, password) {
  return function(dispatch) {
    dispatch({ type: LOG_IN_REQUEST });

    logIn(email, password)
      .then(data => {
        setCookie('accessToken', data.accessToken.split('Bearer ')[1]);
        localStorage.setItem('refreshToken', data.refreshToken);
        console.log('data.refreshToken: ', data);
        dispatch({
          type: LOG_IN_SUCCESS,
          user: data.user,
          // isAuthenticated: data.success,
          // accessToken: data.accessToken
        });
      })
      .catch(error => {
        console.error('Error:', error);
        dispatch({ type: LOG_IN_FAILED });
      })
  }
}

export function logOutUser(refreshToken) {
  return function(dispatch) {
    dispatch({ type: LOG_OUT_REQUEST });

    logOut(refreshToken)
      .then(data => {
        deleteCookie('accessToken');
        localStorage.removeItem('refreshToken');
        dispatch({ type: LOG_OUT_SUCCESS, user: null });
        console.log('log out')
      })
      .catch(error => {
        console.error('Error:', error);
        dispatch({ type: LOG_OUT_FAILED });
      })
  }
}

export function resetPasswordRecoveryReducers() {
  return function(dispatch) {
    dispatch({ type: RESET_PASSWORD_RECOVERY_REDUCERS });
  }
}