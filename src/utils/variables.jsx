import {
  WS_CONNECTION_REQUEST,
  WS_CONNECTION_OPEN,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
} from '../services/actions/wsActionTypes';

export const burgerApiUrl = {
  baseUrl: 'https://norma.nomoreparties.space/api',
  headers: {
    'Content-Type': 'application/json'
  }
};

export const wsUrl = 'wss://norma.nomoreparties.space/api/orders';

export const wsActions = {
  wsInit: WS_CONNECTION_REQUEST,
  onOpen: WS_CONNECTION_OPEN,
  onError: WS_CONNECTION_ERROR,
  onClose: WS_CONNECTION_CLOSED,
  onMessage: WS_GET_MESSAGE
};
