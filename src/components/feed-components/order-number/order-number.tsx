import { FC } from 'react';

interface IProps {
  orderNum: number;
  color: string;
}

const OrderNumber: FC<IProps> = ({ orderNum, color = "#FFFFFF" }) => {
  const style = {
    color: color,
  };

  return (
    <p className={`text text_type_digits-default`} style={ style }>{orderNum}</p>
  );
};

export default OrderNumber;