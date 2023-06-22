import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  REORDER_INGREDIENT,
  RESET_INGREDIENT,
} from '../../services/constants/burgerConstructor';

import { IIngredient } from './data';

export interface IAddIngredient {
  readonly type: typeof ADD_INGREDIENT;
  readonly ingredient: IIngredient;
}

export interface IDeleteIngredient {
  readonly type: typeof DELETE_INGREDIENT;
  readonly ingredient: IIngredient;
}

export interface IReorderFilling {
  readonly type: typeof REORDER_INGREDIENT;
  readonly dragIndex: number;
  readonly hoverIndex: number;
}

export interface IResetBurger {
  readonly type: typeof RESET_INGREDIENT;
}