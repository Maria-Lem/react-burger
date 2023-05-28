import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Form from '../../components/form/form';
import FormInputContainer from '../../components/form/form-input-container/form-input-container';
import FormSubmitBtn from '../../components/form/form-submit-btn/form-submit-btn';
import FormAdditionalActions from '../../components/form/form-additional-actions/form-additional-actions';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

function ResetPassword() {
  const [form, setForm] = useState({
    password: '',
    token: '',
  });

  const { user, passwordRecoverySuccess } = useSelector(store => ({
    user: store.user.user,
    passwordRecoverySuccess: store.user.passwordRecoverySuccess,
  }))
  // console.log('user: ', user);

  const handleChange = (e) => {
    const target = e.target;

    setForm(prevFormData => {
      return {
        ...prevFormData,
        [target.name]: target.value,
      }
    })
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  // if (!user && !passwordRecoverySuccess) {
  //   return <Navigate to="/forgot-password" replace />
  // }

  // if (user) {
  //   return <Navigate to="/" replace />
  // }

  return (
    <Form title="Восстановление пароля">
      <FormInputContainer>
        <PasswordInput
          onChange={handleChange}
          value={form.password}
          name={'password'}
        />
      </FormInputContainer>
      <FormInputContainer>
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={handleChange}
          value={form.token}
          name={'token'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
        />
      </FormInputContainer>
      <div className="mb-20">
        <FormSubmitBtn buttonName="Сохранить" handleSubmit={handleSubmit} />
      </div>
      <FormAdditionalActions text="Вспомнили пароль?" linkName="Войти" pageName="login" />
    </Form>
  )
};

export default ResetPassword;