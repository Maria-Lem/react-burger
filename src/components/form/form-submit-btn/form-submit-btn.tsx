import { FC } from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

interface IProps {
  buttonName: string;
}

const FormSubmitBtn: FC<IProps> = ({ buttonName }) => {
  return (
    <Button htmlType="submit" type="primary" size="medium">
      {buttonName}
    </Button>
  )
}

export default FormSubmitBtn;