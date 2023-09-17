import { nanoid } from "nanoid";

import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  REORDER_INGREDIENT,
  RESET_INGREDIENT,
} from '../constants/burgerConstructor';

import {
  IAddIngredient,
  IDeleteIngredient,
  IReorderFilling,
  IResetBurger,
} from '../../utils/interfaces/burgerConstructor';
import { IIngredient } from "../../utils/interfaces/data";

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