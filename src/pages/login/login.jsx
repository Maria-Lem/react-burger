import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import Form from '../../components/form/form';
import FormInputContainer from '../../components/form/form-input-container/form-input-container';
import FormSubmitBtn from '../../components/form/form-submit-btn/form-submit-btn';
import FormAdditionalActions from '../../components/form/form-additional-actions/form-additional-actions';

import { logInUser, resetPasswordRecoveryReducers } from '../../services/actions/user';
import { useForm } from '../../utils/hooks/useForm';

import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

function Login() {
  const { form, handleChange } = useForm({
    email: '', 
    password: '',
  });
  
  const { user, logOutRequest } = useSelector(store => ({
    user: store.user.user,
    logOutRequest: store.user.logOutRequest
  }));
  
  const dispatch = useDispatch();
  const location = useLocation();

  const from = location.state?.from || '/';
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(logInUser(form.email, form.password));
    dispatch(resetPasswordRecoveryReducers());
  }, [dispatch, form.email, form.password]);
  
  if (user && !logOutRequest) {
    return (
      <Navigate to={from} replace />
    );
  }

  return (
    <Form title="Вход" handleSubmit={handleSubmit}>
      <FormInputContainer>
        <Input
          type={'text'}
          placeholder={'E-mail'}
          onChange={handleChange}
          value={form.email}
          name={'email'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
        />
      </FormInputContainer>
      <FormInputContainer>
        <PasswordInput
          onChange={handleChange}
          value={form.password}
          name={'password'}
        />
      </FormInputContainer>
      <div className="mb-20">
        <FormSubmitBtn buttonName="Войти" />
      </div>
      <FormAdditionalActions text="Вы — новый пользователь?" linkName="Зарегистрироваться" pageName="/register" />
      <FormAdditionalActions text="Забыли пароль?" linkName="Восстановить пароль" pageName="/forgot-password" />
    </Form>
  )
};

export default Login;