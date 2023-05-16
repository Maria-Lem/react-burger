import { Button } from '@ya.praktikum/react-developer-burger-ui-components';


function FormSubmitBtn({ buttonName, handleSubmit }) {
  return (
    <div className="mb-20">
      <Button htmlType="button" type="primary" size="medium" onClick={handleSubmit}>
        {buttonName}
      </Button>
    </div>
  )
}

export default FormSubmitBtn;