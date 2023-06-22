import { 
  SET_INGREDIENT_DETAIL, 
  REMOVE_INGREDIENT_DETAIL 
} from '../constants/ingredient';

import { IIngredientDetailState } from '../../utils/interfaces/ingredient';
import { TIngredientDetailActions } from '../../utils/types/types';

const initialIngredientDetailState: IIngredientDetailState = {
  ingredient: null,
  isIngredientDetailOpen: false
};

export const ingredientDetailReducer = (state = initialIngredientDetailState, action: TIngredientDetailActions): IIngredientDetailState => {
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