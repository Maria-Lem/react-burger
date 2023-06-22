import {
  WS_CONNECTION_REQUEST,
  WS_CONNECTION_OPEN,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
} from '../constants/ws';

import {
  IWsRequest,
  IWsOpen,
  IWsError,
  IWsClosed,
  IWsGetMessage,
} from '../../utils/interfaces/ws';
import { IWsMessage } from '../../utils/interfaces/data';

export function wsConnectionRequest(url: string): IWsRequest {
  return {
    type: WS_CONNECTION_REQUEST, 
    payload: url
  };
}

export function wsConnectionOpen(): IWsOpen {
  return {
    type: WS_CONNECTION_OPEN, 
  };
}

export function wsConnectionError(): IWsError {
  return {
    type: WS_CONNECTION_ERROR, 
  };
}

export function wsConnectionClosed(): IWsClosed {
  return {
    type: WS_CONNECTION_CLOSED, 
  };
}

export function wsGetMessage(message: IWsMessage): IWsGetMessage {
  return {
    type: WS_GET_MESSAGE, 
    payload: message,
  };
}