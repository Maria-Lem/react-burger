import PropTypes from 'prop-types';

export const ingredientPropTypes = PropTypes.shape({
  _id: PropTypes.string,
  image: PropTypes.string,
  image_large: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
  calories: PropTypes.number,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  openModal: PropTypes.func
});