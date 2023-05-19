import { useState, useRef } from 'react';

import Form from '../../components/form/form';
import FormInputContainer from '../../components/form/form-input-container/form-input-container';
import FormSubmitBtn from '../../components/form/form-submit-btn/form-submit-btn';
import FormAdditionalActions from '../../components/form/form-additional-actions/form-additional-actions';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

function ForgotPassword() {
  const [form, setForm] = useState({
    email: '',
  });

  const inputRef = useRef(null);

  const handleChange = (e) => {
    const target = e.target;

    setForm(prevFormData => ({
      ...prevFormData,
      [target.name]: target.value,
    }))
  };

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    console.log('Icon Click Callback')
  };

  return (
    <Form title="Восстановление пароля">
      <FormInputContainer>
        <Input
          type={'text'}
          placeholder={'Укажите e-mail'}
          onChange={handleChange}
          value={form.email}
          name={'email'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
        />
      </FormInputContainer>
      <div className="mb-20">
        <FormSubmitBtn buttonName="Восстановить" />
      </div>
      <FormAdditionalActions text="Вспомнили пароль?" linkName="Войти" pageName="login" />
    </Form>
  )
};

export default ForgotPassword;