import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED
} from '../constants/order';

import { ICreateOrderState } from '../../utils/interfaces/order';
import { TCreateOrderActions } from '../../utils/types/types';

const initialOrderState: ICreateOrderState = {
  orderNumber: null,
  orderRequest: false,
  orderFailed: false,
};

export const orderReducer = (state = initialOrderState, action: TCreateOrderActions): ICreateOrderState => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true
      };
    }
    case CREATE_ORDER_SUCCESS: {
      return {
        ...state,
        orderNumber: action.orderNumber,
        orderRequest: false,
        orderFailed: false
      };
    }
    case CREATE_ORDER_FAILED: {
      return {
        ...state,
        orderNumber: null,
        orderRequest: false,
        orderFailed: true
      };
    }
    default: {
      return state;
    }
  }
}