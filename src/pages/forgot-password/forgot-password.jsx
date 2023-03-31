import { useState, useRef } from 'react';

import Form from '../../components/form/form';
import FormInputContainer from '../../components/form/form-input-container/form-input-container';
import FormSubmitBtn from '../../components/form/form-submit-btn/form-submit-btn';
import FormAdditionalActions from '../../components/form/form-additional-actions/form-additional-actions';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const inputRef = useRef(null);

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
          onChange={e => setEmail(e.target.value)}
          value={email}
          name={'email'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
        />
      </FormInputContainer>
      <FormSubmitBtn buttonName="Восстановить" />
      <FormAdditionalActions text="Вспомнили пароль?" linkName="Войти" pageName="login" />
    </Form>
  )
};

export default ForgotPassword;