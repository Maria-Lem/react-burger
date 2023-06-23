import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from '../constants/ingredients';

import { getIngredients } from "../../utils/api";
import { AppThunk } from '../types';

export function getBurgerIngredients(): AppThunk {
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