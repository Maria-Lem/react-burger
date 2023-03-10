export const filterIngredientElements = (ingredientElement, type) => {
  return ingredientElement.filter(el => el.props.ingredient.type === type)
};