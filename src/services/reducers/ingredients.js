import {
  INCREASE_INGREDIENT,
  DECREASE_INGREDIENT,
  TAB_SWITCH,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from '../actions/ingredients';

const initialIngredientsState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false
};

export const ingredientsReducer = (state = initialIngredientsState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
        ingredientsRequest: false,
        ingredientsFailed: false
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true
      };
    }
    case INCREASE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(ingredient => {
          return ingredient._id === action._id 
            ? { ...ingredient, quantity: ++ingredient.quantity }
            : ingredient
        })
      };
    }
    case DECREASE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(ingredient => {
          return ingredient._id === action._id
            ? { ...ingredient, quantity: --ingredient.quantity }
            : ingredient
        })
      };
    }
    default: {
      return state;
    }
  }
}