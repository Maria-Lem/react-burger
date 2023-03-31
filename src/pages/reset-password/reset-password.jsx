import { useState, useRef } from 'react';

import Form from '../../components/form/form';
import FormInputContainer from '../../components/form/form-input-container/form-input-container';
import FormSubmitBtn from '../../components/form/form-submit-btn/form-submit-btn';
import FormAdditionalActions from '../../components/form/form-additional-actions/form-additional-actions';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

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
          placeholder={'Введите новый пароль'}
          onChange={e => setPassword(e.target.value)}
          value={password}
          icon={'ShowIcon'}
          name={'password'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
        />
      </FormInputContainer>
      <FormInputContainer>
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={e => setToken(e.target.value)}
          value={token}
          name={'token'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
        />
      </FormInputContainer>
      <FormSubmitBtn buttonName="Сохранить" />
      <FormAdditionalActions text="Вспомнили пароль?" linkName="Войти" pageName="login" />
    </Form>
  )
};

export default ResetPassword;