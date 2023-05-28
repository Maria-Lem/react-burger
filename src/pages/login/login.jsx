import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Form from '../../components/form/form';
import FormInputContainer from '../../components/form/form-input-container/form-input-container';
import FormSubmitBtn from '../../components/form/form-submit-btn/form-submit-btn';
import FormAdditionalActions from '../../components/form/form-additional-actions/form-additional-actions';

import { logInUser } from '../../services/actions/user';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  // console.log('form: ', form);
  
  const { user, logOutRequest } = useSelector(store => ({
    user: store.user.user,
    logOutRequest: store.user.logOutRequest
  }));
  console.log('logOutRequest: ', logOutRequest);
  // console.log('user: ', user);
  
  const dispatch = useDispatch();
  
  const handleChange = useCallback((e) => {
    const target = e.target;

    setForm(prevFormData => ({
      ...prevFormData,
      [target.name]: target.value,
    }))
  }, []);
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(logInUser(form.email, form.password));
  }, [dispatch, form.email, form.password]);
  
  if (user && !logOutRequest) {
    // console.log(user)
    return (
      <Navigate to="/" replace />
    );
  }
    // console.log('user', user);

  return (
    <Form title="Вход">
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
        <FormSubmitBtn buttonName="Войти" handleSubmit={handleSubmit} />
      </div>
      <FormAdditionalActions text="Вы — новый пользователь?" linkName="Зарегистрироваться" pageName="register" />
      <FormAdditionalActions text="Забыли пароль?" linkName="Восстановить пароль" pageName="forgot-password" />
    </Form>
  )
};

export default Login;