export const socketMiddleware = (wsActions) => {
  return store => {
    let socket = null;
    let url = '';

    return next => action => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;
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