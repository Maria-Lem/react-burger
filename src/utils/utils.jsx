export const filterIngredientElements = (ingredientElement, type) => {
  return ingredientElement.filter(el => el.props.ingredient.type === type)
};

export function setCookie(name, value, props) {
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

export function getCookie(name) {
  const matches = document.cookie.match(
    // eslint-disable-next-line no-useless-escape
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function deleteCookie(name) {
  setCookie(name, null, { expires: -1 });
} 

export function saveToLocalStorage(state) {
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

export const orderPrice = (order, ingredients) => {
  let price = 0;
  const bun = ingredients.find(ing => order.find(id => ing.type === 'bun' && ing._id === id));

  order.forEach(ing => {
    let current = ingredients.find(i => i._id === ing)

    if (current.type !== 'bun') {
      price += current.price;
    } 

  });

  return price + (bun ? bun.price * 2 : 0);
};

export const getDiffDays = (orderDate, today) => Math.floor((today - orderDate) / (1000 * 60 * 60 * 24));

export const getFormattedDate = (orderDate, today) => {
  const getDiffDays = Math.floor((today - orderDate) / (1000 * 60 * 60 * 24));
  
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