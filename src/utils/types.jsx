import PropTypes from 'prop-types';

export const ingredientPropTypes = PropTypes.shape({
  image: PropTypes.string,
  image_large: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
  calories: PropTypes.number,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
});