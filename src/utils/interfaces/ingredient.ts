import {
  SET_INGREDIENT_DETAIL,
  REMOVE_INGREDIENT_DETAIL,
} from '../../services/constants/ingredient';

import { IIngredient } from "./data";

export interface IIngredientDetailState {
  ingredient: IIngredient | null;
  isIngredientDetailOpen: boolean;
}

export interface ISetIngredientDetail {
  readonly type: typeof SET_INGREDIENT_DETAIL;
  readonly ingredient: IIngredient;
}

export interface IRemoveIngredientDetail {
  readonly type: typeof REMOVE_INGREDIENT_DETAIL;
}