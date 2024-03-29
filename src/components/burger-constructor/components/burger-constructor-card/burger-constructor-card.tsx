import { useRef, FC } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';

import styles from './burger-constructor-card.module.css';

import { reorderFilling } from '../../../../services/actions/burgerConstructor';
import { IIngredient } from '../../../../utils/interfaces/data';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

interface IProps {
  ingredient: IIngredient;
  index: number;
  id?:  string;
  handleDelete: (ingredient: IIngredient) => void;
}

const BurgerConstructorCard: FC<IProps> = ({ ingredient, id, index, handleDelete }) => {
  const ref = useRef<HTMLLIElement>(null);
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
    hover(item: {index: number}, monitor) {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      dispatch(reorderFilling(dragIndex, hoverIndex));

      item.index = hoverIndex;
    },
    collect: monitor => ({
      handlerId: monitor.getHandlerId()
    }),
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
};

export default BurgerConstructorCard;