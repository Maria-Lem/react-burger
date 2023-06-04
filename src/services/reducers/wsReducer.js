import {
  WS_CONNECTION_REQUEST,
  WS_CONNECTION_OPEN,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
} from '../actions/wsActionTypes';

const initialWsState = {
  wsRequest: false,
  wsOpen: false,
  wsError: false,
  wsClosed: false,
  orders: null,
  total: null,
  totalToday: null,
};

export const wsReducer = (state = initialWsState, action) => {
  switch (action.type) {
    case WS_CONNECTION_REQUEST: {
      return {
        ...state,
        wsRequest: true,
        wsOpen: false,
        wsError: false,
        wsClosed: false,

      };
    }
    case WS_CONNECTION_OPEN: {
      return {
        ...state,
        wsRequest: false,
        wsOpen: true,
        wsError: false,
        wsClosed: false,

      };
    }
    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        wsRequest: false,
        wsOpen: false,
        wsError: true,
        wsClosed: false,

      };
    }
    case WS_CONNECTION_CLOSED: {
      return {
        ...state,
        wsRequest: false,
        wsOpen: false,
        wsError: false,
        wsClosed: true,

      };
    }
    case WS_GET_MESSAGE: {
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    }
    default: {
      return state;
    }
  }
}