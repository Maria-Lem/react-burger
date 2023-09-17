import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
} from '../../services/constants/order';

export interface ICreateOrderState {
  orderNumber: number | null;
  orderRequest: boolean;
  orderFailed: boolean;
}

export interface ICreateOrderRequest {
  readonly type: typeof CREATE_ORDER_REQUEST;
}

export interface ICreateOrderSuccess {
  readonly type: typeof CREATE_ORDER_SUCCESS;
  readonly orderNumber: number;
}
export interface ICreateOrderFailed {
  readonly type: typeof CREATE_ORDER_FAILED;
}