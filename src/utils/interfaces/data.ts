import {
  WS_CONNECTION_REQUEST,
  WS_CONNECTION_OPEN,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
} from '../../services/constants/ws';

export interface IIngredient {
  type: 'bun' | 'filling' | 'sauce';
  name: string;
  image: string;
  image_large: string;
  image_mobile: string;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
  price: number;
  _id: string;
  quantity?: number;
  nanoId?: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IOrder {
  number: number;
  name: string;
  status: string;
  ingredients: string[];
  _id: string;
  createdAt: string;
}

export interface IWsMessage {
  orders: Array<IOrder>;
  total: number | null;
  totalToday: number | null;
}

export interface IWsActions {
  wsInit: typeof WS_CONNECTION_REQUEST,
  onOpen: typeof WS_CONNECTION_OPEN,
  onError: typeof WS_CONNECTION_ERROR,
  onClose: typeof WS_CONNECTION_CLOSED,
  onMessage: typeof WS_GET_MESSAGE
}