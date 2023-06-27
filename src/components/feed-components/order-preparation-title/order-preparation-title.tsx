import { FC } from 'react';

interface IProps {
  title: string;
}

const OrderPreparationTitle: FC<IProps> = ({ title }) => {
  return (
    <h4 className={`text text_type_main-medium`}>{title}</h4>
  );
};

export default OrderPreparationTitle;