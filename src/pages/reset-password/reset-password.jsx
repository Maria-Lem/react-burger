import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Form from '../../components/form/form';
import FormInputContainer from '../../components/form/form-input-container/form-input-container';
import FormSubmitBtn from '../../components/form/form-submit-btn/form-submit-btn';
import FormAdditionalActions from '../../components/form/form-additional-actions/form-additional-actions';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { resetPassword } from '../../services/actions/user';

function ResetPassword() {
  const [form, setForm] = useState({
    password: '',
    token: '',
  });
  const dispatch = useDispatch();

  const { user, passwordRecoverySuccess, passwordResetSuccess, isAuthenticated } = useSelector(store => ({
    user: store.user.user,
    passwordRecoverySuccess: store.user.passwordRecoverySuccess,
    passwordResetSuccess: store.user.passwordResetSuccess,
    isAuthenticated: store.user
  }));
  // console.log('passwordResetSuccess: ', passwordResetSuccess);
  console.log('isAuthenticated: ', isAuthenticated);
  console.log('user: ', user);

  const handleChange = (e) => {
    const target = e.target;

    setForm(prevFormData => {
      return {
        ...prevFormData,
        [target.name]: target.value,
      }
    });
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(resetPassword(form.password, form.token));
    // console.log('reset');
  }, [dispatch, form.password, form.token]);

  if (!user && !passwordRecoverySuccess) {
    return <Navigate to="/forgot-password" replace />
  }

  if (passwordResetSuccess) {
    return <Navigate to="/login" replace />;
  }

  if (user) {
    return <Navigate to="/" replace />
  }

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