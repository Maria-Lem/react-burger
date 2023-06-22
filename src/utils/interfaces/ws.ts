import {
  WS_CONNECTION_REQUEST,
  WS_CONNECTION_OPEN,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
} from '../../services/constants/ws';

import { IWsMessage } from './data';


export interface IWsRequest {
  readonly type: typeof WS_CONNECTION_REQUEST;
  readonly payload: string;
}

export interface IWsOpen {
  readonly type: typeof WS_CONNECTION_OPEN;
}

export interface IWsError {
  readonly type: typeof WS_CONNECTION_ERROR;
}

export interface IWsClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsGetMessage {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: IWsMessage; 
}