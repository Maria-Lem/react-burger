import { Button } from '@ya.praktikum/react-developer-burger-ui-components';


function FormSubmitBtn({ buttonName }) {
  return (
    <Button htmlType="submit" type="primary" size="medium">
      {buttonName}
    </Button>
  )
}

export default FormSubmitBtn;