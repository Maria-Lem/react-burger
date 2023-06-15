export const WS_CONNECTION_REQUEST = 'WS_CONNECTION_REQUEST';
export const WS_CONNECTION_OPEN = 'WS_CONNECTION_OPEN'; 
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE = 'WS_GET_MESSAGE';

export function wsConnectionRequest(url) {
  return {
    type: WS_CONNECTION_REQUEST, 
    payload: url
  };
}

export function wsConnectionOpen() {
  return {
    type: WS_CONNECTION_OPEN, 
  };
}

export function wsConnectionError() {
  return {
    type: WS_CONNECTION_ERROR, 
  };
}

export function wsConnectionClosed() {
  return {
    type: WS_CONNECTION_CLOSED, 
  };
}

export function wsGetMessage(message) {
  return {
    type: WS_GET_MESSAGE, 
    payload: message,
  };
}