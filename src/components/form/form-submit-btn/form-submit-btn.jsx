import { Button } from '@ya.praktikum/react-developer-burger-ui-components';


function FormSubmitBtn({ buttonName, handleSubmit }) {
  return (
    <Button htmlType="button" type="primary" size="medium" onClick={handleSubmit}>
      {buttonName}
    </Button>
  )
}

export default FormSubmitBtn;