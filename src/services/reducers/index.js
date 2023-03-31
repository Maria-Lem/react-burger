import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { ingredientDetailReducer } from "./ingredient";
import { burgerConstructorReducer } from "./burgerConstructor";
import { orderReducer } from "./order";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  ingredient: ingredientDetailReducer,
  burger: burgerConstructorReducer,
  order: orderReducer,
  user: userReducer,
});