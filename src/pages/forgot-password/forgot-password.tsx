import { useCallback, FC, FormEvent } from 'react';
import { useDispatch, useSelector } from '../../services/types/hooks';
import { Navigate } from 'react-router-dom';

import { forgotPassword } from '../../services/actions/user';
import { useForm } from '../../utils/hooks/useForm';

import Form from '../../components/form/form';
import FormInputContainer from '../../components/form/form-input-container/form-input-container';
import FormSubmitBtn from '../../components/form/form-submit-btn/form-submit-btn';
import FormAdditionalActions from '../../components/form/form-additional-actions/form-additional-actions';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

const ForgotPassword: FC = () => {
  const { form, handleChange } = useForm({ email: '', });

  const dispatch = useDispatch();

  const { user, passwordRecoverySuccess } = useSelector(store => ({
    user: store.user.user,
    passwordRecoverySuccess: store.user.passwordRecoverySuccess,
  }));

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
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
    <Form title="Восстановление пароля" handleSubmit={handleSubmit}>
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
        <FormSubmitBtn buttonName="Восстановить" />
      </div>
      <FormAdditionalActions text="Вспомнили пароль?" linkName="Войти" pageName="login" />
    </Form>
  )
};

export default ForgotPassword;