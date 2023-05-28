import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Form from '../../components/form/form';
import FormInputContainer from '../../components/form/form-input-container/form-input-container';
import FormSubmitBtn from '../../components/form/form-submit-btn/form-submit-btn';
import FormAdditionalActions from '../../components/form/form-additional-actions/form-additional-actions';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

function ForgotPassword() {
  const [form, setForm] = useState({
    email: '',
  });

  const { user } = useSelector(store => ({
    user: store.user.user,
  }));
  console.log('user: ', user);
  
  const handleChange = (e) => {
    const target = e.target;

    setForm(prevFormData => ({
      ...prevFormData,
      [target.name]: target.value,
    }))
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  if (user) {
    return <Navigate to="/" replace />
  }

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
          errorText={'Ошибка'}
          size={'default'}
        />
      </FormInputContainer>
      <div className="mb-20">
        <FormSubmitBtn buttonName="Восстановить" handleSubmit={handleSubmit} />
      </div>
      <FormAdditionalActions text="Вспомнили пароль?" linkName="Войти" pageName="login" />
    </Form>
  )
};

export default ForgotPassword;