import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Form from '../../components/form/form';
import FormInputContainer from '../../components/form/form-input-container/form-input-container';
import FormSubmitBtn from '../../components/form/form-submit-btn/form-submit-btn';
import FormAdditionalActions from '../../components/form/form-additional-actions/form-additional-actions';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { forgotPassword } from '../../services/actions/user';

function ForgotPassword() {
  const [form, setForm] = useState({
    email: '',
  });
  const dispatch = useDispatch();

  const { user, passwordRecoverySuccess } = useSelector(store => ({
    user: store.user.user,
    passwordRecoverySuccess: store.user.passwordRecoverySuccess,
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
    dispatch(forgotPassword(form.email));
    console.log('password sent');
  }, [dispatch, form.email]);

  if (user) {
    return <Navigate to="/" replace />
  }

  if (passwordRecoverySuccess) {
    return <Navigate to="/reset-password" replace />;
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
      {/* <FormAdditionalActions text="Код для изменения пароля был отправлен Вам на почту." linkName="Изменить пароль" pageName="reset-password" /> */}
        
    </Form>
  )
};

export default ForgotPassword;