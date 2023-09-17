import { IIngredient } from "./interfaces/data";

export const filterIngredientElements = (ingredientElement: any[], type: string) => {
  return ingredientElement.filter(el => el.props.ingredient.type === type)
};

// Cookies
export function setCookie(
  name: string, 
  value: string, 
  props: { [key: string]: any; } = {}
) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
} 

export function getCookie(name: string): string | undefined {
  const matches = document.cookie.match(
    // eslint-disable-next-line no-useless-escape
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function deleteCookie(name: string) {
  setCookie(name, '', { expires: -1 });
} 

// Saving store to localStorage
export function saveToLocalStorage(state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);  
  }
}

export function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  }
  catch (e) {
    console.log(e);
  }
}

// Count order price
export const orderPrice = (order: string[], ingredients: IIngredient[]) => {
  let price = 0;
  const bun = ingredients.find(ing => order.find(id => ing.type === 'bun' && ing._id === id));

  order.forEach(ing => {
    let current = ingredients.find(i => i._id === ing)

    if (current?.type !== 'bun') {
      if (current) price += current.price;
    } 
  });

  return price + (bun ? bun.price * 2 : 0);
};

// Format the order date
export const getFormattedDate = (orderDate:  Date, today: Date) => {
  const getDiffDays = Math.floor((today.getTime() - orderDate.getTime()) / (1000 * 60 * 60 * 24));
  
  const orderMinutes = orderDate.getMinutes().toString().length < 2 ? `0${orderDate.getMinutes()}` : orderDate.getMinutes();

  let formattedDate = '';

  switch (getDiffDays) {
    case 0:
      return formattedDate = `Сегодня, ${orderDate.getHours()}:${orderMinutes} i-GMT+3`;
    case 1:
      return formattedDate = `Вчера, ${orderDate.getHours()}:${orderMinutes} i-GMT+3`;
    case 2:
    case 3:
    case 4:
      return formattedDate = `${getDiffDays} дня назад, ${orderDate.getHours()}:${orderMinutes} i-GMT+3`;
    default:
      return formattedDate = `${getDiffDays} дней назад, ${orderDate.getHours()}:${orderMinutes} i-GMT+3`;
  }
};

// Preparation status style
export const preparationStatus = (preparation: string | null) => {
  return preparation === 'done' 
    ? 'Выполнен' 
    : preparation === 'created'
    ? 'Создан'
    : preparation === null
    ? null
    : 'Готовится';
}

export const preparationStatusColor = (preparation: string | null) => {
  return {
    color: preparation === 'done' ? "#00CCCC" : "#FFFFFF",
  }
};