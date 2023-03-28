import styles from './form-submit-btn.module.css';

import { Button } from '@ya.praktikum/react-developer-burger-ui-components';


function FormSubmitBtn({ buttonName }) {
  return (
    <div className="mb-20">
      <Button htmlType="button" type="primary" size="medium">
        {buttonName}
      </Button>
    </div>
  )
}

export default FormSubmitBtn;