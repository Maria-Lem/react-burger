import { getIngredients } from "../../utils/api";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export function getBurgerIngredients() {
  return function(dispatch) {
    dispatch({ type: GET_INGREDIENTS_REQUEST });

    getIngredients()
      .then(data => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: data.data
        })
      })
      .catch(error => {
        console.error('Error:', error);
        dispatch({ type: GET_INGREDIENTS_FAILED });
      })
  }
}