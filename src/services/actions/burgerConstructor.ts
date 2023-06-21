import { nanoid } from "nanoid";

import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  REORDER_INGREDIENT,
  RESET_INGREDIENT,
} from '../constants/burgerConstructor';

import { IIngredient } from "../../utils/interfaces/ingredient";

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

export const addIngredient = (ingredient: IIngredient): IAddIngredient => {
  return {
    type: ADD_INGREDIENT,
    ingredient: {
      ...ingredient,
      nanoId: nanoid(),
    },
  };
};

export const deleteIngredient = (ingredient: IIngredient): IDeleteIngredient => {
  return {
    type: DELETE_INGREDIENT,
    ingredient: ingredient
  };
};

export const reorderFilling = (dragIndex: number, hoverIndex: number): IReorderFilling => {
  return {
    type: REORDER_INGREDIENT,
    dragIndex,
    hoverIndex
  };
};

export const resetBurger = (): IResetBurger => {
  return {
    type: RESET_INGREDIENT
  };
};