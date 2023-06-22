import {
  SET_INGREDIENT_DETAIL,
  REMOVE_INGREDIENT_DETAIL,
} from '../constants/ingredient';

import {
  ISetIngredientDetail,
  IRemoveIngredientDetail,
} from '../../utils/interfaces/ingredient';
import { IIngredient } from '../../utils/interfaces/data';

export const setIngredientDetail = (ingredient: IIngredient): ISetIngredientDetail => {
  return {
    type: SET_INGREDIENT_DETAIL,
    ingredient: ingredient
  }
}

export const removeIngredientDetail = (): IRemoveIngredientDetail => {
  return {
    type: REMOVE_INGREDIENT_DETAIL
  }
}