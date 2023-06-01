import { nanoid } from "nanoid";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const REORDER_INGREDIENT = 'REORDER_INGREDIENT';
export const RESET_INGREDIENT = 'RESET_INGREDIENT';

export const addIngredient = (item) => {
  return {
    type: ADD_INGREDIENT,
    ingredient: {
      ...item,
      nanoId: nanoid(),
    },
  };
};

export const deleteIngredient = (item) => {
  return {
    type: DELETE_INGREDIENT,
    ingredient: item
  };
};

export const reorderFilling = (dragIndex, hoverIndex) => {
  return {
    type: REORDER_INGREDIENT,
    dragIndex,
    hoverIndex
  };
};

export const resetBurger = () => {
  return {
    type: RESET_INGREDIENT
  };
};