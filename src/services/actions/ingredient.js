export const SET_INGREDIENT_DETAIL = 'SET_INGREDIENT_DETAIL';
export const REMOVE_INGREDIENT_DETAIL = 'REMOVE_INGREDIENT_DETAIL';

export const setIngredientDetail = (item) => {
  return {
    type: SET_INGREDIENT_DETAIL,
    ingredient: item
  }
}

export const removeIngredientDetail = () => {
  return {
    type: REMOVE_INGREDIENT_DETAIL
  }
}