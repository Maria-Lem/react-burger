import { 
  SET_INGREDIENT_DETAIL, 
  REMOVE_INGREDIENT_DETAIL 
} from '../actions/ingredient';

const initialIngredientDetailState = {
  ingredient: null,
  isIngredientDetailOpen: false
};

export const ingredientDetailReducer = (state = initialIngredientDetailState, action) => {
  switch (action.type) {
    case SET_INGREDIENT_DETAIL: {
      return {
        ...state,
        ingredient: action.ingredient,
        isIngredientDetailOpen: true
      };
    }
    case REMOVE_INGREDIENT_DETAIL: {
      return {
        ...state,
        ingredient: null,
        isIngredientDetailOpen: false
      };
    }
    default: {
      return state;
    }
  }
};