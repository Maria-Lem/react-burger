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