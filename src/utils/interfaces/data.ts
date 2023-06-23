export interface IIngredient {
  type: 'bun' | 'filling' | 'sauce';
  name: string;
  image: string;
  price: number;
  _id: string;
  nanoId?: string;
}

export interface IUser {
  name: string;
  email: string;
}

export interface IOrder {

}

export interface IWsMessage {
  orders: Array<IOrder>;
  total: number | null;
  totalToday: number | null;
}