import { register } from "../../utils/api";

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILED = 'USER_REGISTER_FAILED';

export function createNewUser(email, password, name) {
  return function(dispatch) {
    dispatch({ type: USER_REGISTER_REQUEST });

    register(email, password, name)
      .then(data => {
        dispatch({
          type: USER_REGISTER_SUCCESS,
          user: data.user
        });
      })
      .catch(error => {
        console.error('Error:', error);
        dispatch({ type: USER_REGISTER_FAILED });
      });
  }
}