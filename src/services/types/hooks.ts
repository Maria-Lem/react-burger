import { 
  TypedUseSelectorHook, 
  useSelector as selectorHook, 
  useDispatch as dispatchHook 
} from "react-redux";
import { AppDispatch, RootState } from ".";

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

type TDispatchFunc = () => AppDispatch;
export const useDispatch: TDispatchFunc = dispatchHook;