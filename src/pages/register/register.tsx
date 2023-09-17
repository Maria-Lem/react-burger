import { FormEvent, useCallback } from 'react';
import { useDispatch, useSelector } from '../../services/types/hooks';
import { Navigate } from 'react-router-dom';

import { createNewUser } from '../../services/actions/user';
import { useForm } from '../../utils/hooks/useForm';

import Form from '../../components/form/form';
import FormInputContainer from '../../components/form/form-input-container/form-input-container';
import FormSubmitBtn from '../../components/form/form-submit-btn/form-submit-btn';
import FormAdditionalActions from '../../components/form/form-additional-actions/form-additional-actions';

import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

function Register() {
  const { form, handleChange } = useForm({ 
    email: '',
    password: '',
    name: '',
  });
  const { user } = useSelector(store => store.user);

  const dispatch = useDispatch();

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
      console.log('clicked');
      e.preventDefault();
      dispatch(createNewUser(form.email, form.password, form.name));
    },
    [dispatch, form.email, form.name, form.password]
  );

  if (user) {
    return (
      <Navigate to="/" replace />
    );
  }

  return (
    <Form title="Регистрация" handleSubmit={handleSubmit}>
      <FormInputContainer>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={handleChange}
          value={form.name}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
        />
      </FormInputContainer>
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
        <FormSubmitBtn buttonName="Зарегистрироваться" />
      </div>
      <FormAdditionalActions text="Уже зарегистрированы?" linkName="Войти" pageName="login" />
    </Form>
  )
};

export default Register;