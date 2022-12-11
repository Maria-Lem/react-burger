import { ADD_INGREDIENT, DELETE_INGREDIENT } from "../actions/burgerConstructor";

const initialBurgerConstructorState = { 
  bun: null,
  filling: [],
  totalPrice: 0,
  orderList: []
};

export function burgerConstructorReducer(state = initialBurgerConstructorState, action) {
  switch (action.type) {
    case ADD_INGREDIENT:
      if (action.ingredient.type === 'bun') {
        return { 
          ...state,
          bun: action.ingredient,
          totalPrice: state.totalPrice + action.ingredient.price * 2,
          orderList: [...state.orderList, action.ingredient._id]
        };
      } else {
        return { 
          ...state,
          filling: [...state.filling, action.ingredient],
          totalPrice: state.totalPrice + action.ingredient.price,
          orderList: [...state.orderList, action.ingredient._id]
        };
      }
    case DELETE_INGREDIENT: {
      return { 
        ...state,
        filling: [...state.filling].filter(item => item._id !== action.ingredient._id),
        totalPrice: state.totalPrice - action.ingredient.price,
        orderList: [...state.orderList].filter(item => item._id !== action.ingredient._id)
      }
    }
    default: {
      return state;
    }
  };
}