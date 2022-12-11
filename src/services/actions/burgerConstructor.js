export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

export const addIngredient = (item) => {
  return {
    type: ADD_INGREDIENT,
    ingredient: item
  }
}

export const deleteIngredient = () => {
  return {
    type: DELETE_INGREDIENT
  }
}