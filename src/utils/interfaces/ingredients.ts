import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from '../../services/constants/ingredients';

import { IIngredient } from "./data";

export interface IGetIngredientsState {
  ingredients: ReadonlyArray<IIngredient>;
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
}

export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly ingredients: IIngredient[];
}

export interface IGetIngredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}