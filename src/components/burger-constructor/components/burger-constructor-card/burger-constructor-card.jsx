import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { reorderFilling } from '../../../../services/actions/burgerConstructor';
import { ingredientPropTypes } from '../../../../utils/types';

import styles from './burger-constructor-card.module.css';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructorCard({ ingredient, id, index, handleDelete }) {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const [{ isDragging }, dragRef] = useDrag({
    type: 'filling',
    item: () => ({
      id, index
    }),
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const [{ handlerId }, dropRef] = useDrop({
    accept: 'filling',
    collect: monitor => ({
      handlerId: monitor.getHandlerId()
    }),
    hover(item, monitor) {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      dispatch(reorderFilling(dragIndex, hoverIndex));

      item.index = hoverIndex;
    }
  });

  const opacity = isDragging ? 0 : 1;

  dragRef(dropRef(ref));

  return (
    <li ref={ref} style={{opacity}} data-handler-id={handlerId} className={`${styles.burgerConstructorItem} mr-1`}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => handleDelete(ingredient)}
      />
    </li>
  )
}

BurgerConstructorCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired
}

export default BurgerConstructorCard;