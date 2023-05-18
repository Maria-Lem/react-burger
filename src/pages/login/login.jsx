import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from '../../components/form/form';
import FormInputContainer from '../../components/form/form-input-container/form-input-container';
import FormSubmitBtn from '../../components/form/form-submit-btn/form-submit-btn';
import FormAdditionalActions from '../../components/form/form-additional-actions/form-additional-actions';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { logInUser } from '../../services/actions/user';
import { Navigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { user } = useSelector(store => store.user);

  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    const target = e.target;

    setForm(prevFormData => ({
      ...prevFormData,
      [target.name]: target.value,
    }))
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('clicked');
    dispatch(logInUser(form.email, form.password));
  },
  [dispatch, form.email, form.password]
  );

  if (user) {
    return (
      <Navigate to="/" replace />
    );
  }

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
      <FormSubmitBtn buttonName="Войти" handleSubmit={handleSubmit} />
      <FormAdditionalActions text="Вы — новый пользователь?" linkName="Зарегистрироваться" pageName="register" />
      <FormAdditionalActions text="Забыли пароль?" linkName="Восстановить пароль" pageName="forgot-password" />
    </Form>
  )
};

export default Login;