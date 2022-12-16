import { nanoid } from "nanoid";
import { ADD_INGREDIENT, DELETE_INGREDIENT } from "../actions/burgerConstructor";

const initialBurgerConstructorState = { 
  bun: null,
  filling: [],
  totalPrice: 0,
};

export function burgerConstructorReducer(state = initialBurgerConstructorState, action) {
  switch (action.type) {
    case ADD_INGREDIENT:
      if (action.ingredient.type === 'bun') {
        if (state.bun) {
          return {
            ...state,
            bun: action.ingredient,
            totalPrice: state.totalPrice - state.bun.price * 2 + action.ingredient.price * 2,
          }
        } else {
          return { 
            ...state,
            bun: action.ingredient,
            totalPrice: state.totalPrice + action.ingredient.price * 2,
          };
        }
      } else {
        return { 
          ...state,
          filling: [...state.filling, {
              ...action.ingredient, 
              nanoId: nanoid(),
              quantity: state.filling.filter(ingredient => ingredient._id === action.ingredient._id).length
            }],
          totalPrice: state.totalPrice + action.ingredient.price,
        };
      }
    case DELETE_INGREDIENT: {
      return { 
        ...state,
        filling: [...state.filling].filter(item => item.nanoId !== action.ingredient.nanoId),
        totalPrice: state.totalPrice - action.ingredient.price,
      }
    }
    default: {
      return state;
    }
  };
}