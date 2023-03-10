import { createOrder } from "../../utils/api";

export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED';

export function createNewOrder(orderList) {
  return function(dispatch) {
    dispatch({ type: CREATE_ORDER_REQUEST });

    createOrder(orderList)
      .then(data => {
        dispatch({
          type: CREATE_ORDER_SUCCESS,
          orderNumber: data.order.number
        });
      })
      .catch(error => {
        console.error('Error:', error);
        dispatch({ type: CREATE_ORDER_FAILED });
      });
  }
}