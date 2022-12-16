export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const INCREASE_INGREDIENT = 'INCREASE_INGREDIENT';
export const DECREASE_INGREDIENT = 'DECREASE_INGREDIENT';

export const addIngredient = (item) => {
  return {
    type: ADD_INGREDIENT,
    ingredient: item
  }
}

export const deleteIngredient = (item) => {
  return {
    type: DELETE_INGREDIENT,
    ingredient: item
  }
}