import { getCookie } from "../../utils/utils";
import { refreshToken } from "../actions/user";

export const socketMiddleware = (wsActions) => {
  return store => {
    let socket = null;
    let url = '';

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;
      const accessToken = getCookie('accessToken');

      if (type === wsInit) {
        url = payload;
        // объект класса WebSocket
        socket = new WebSocket(url);
      }

      if (socket) {

        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };

        // функция, которая вызывается при получении события от сервера
        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          if (!accessToken) {
            dispatch(refreshToken());
          }

          dispatch({ type: onMessage, payload: restParsedData });
        };

        // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };
      }

      next(action);
    };
  };
};