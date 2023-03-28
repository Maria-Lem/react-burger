import { useState, useRef } from 'react';

import Form from '../../components/form/form';
import FormInputContainer from '../../components/form/form-input-container/form-input-container';
import FormSubmitBtn from '../../components/form/form-submit-btn/form-submit-btn';
import FormAdditionalActions from '../../components/form/form-additional-actions/form-additional-actions';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

function Login() {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    console.log('Icon Click Callback')
  }
  return (
    <Form title="Вход">
      <FormInputContainer>
        <Input
          type={'text'}
          placeholder={'E-mail'}
          onChange={e => setValue(e.target.value)}
          value={value}
          name={'name'}
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
          placeholder={'Пароль'}
          onChange={e => setValue(e.target.value)}
          value={value}
          icon={'ShowIcon'}
          name={'name'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
        />
      </FormInputContainer>
      <FormSubmitBtn buttonName="Войти" />
      <FormAdditionalActions text="Вы — новый пользователь?" linkName="Зарегистрироваться" pageName="register" />
      <FormAdditionalActions text="Забыли пароль?" linkName="Восстановить пароль" pageName="forgot-password" />
    </Form>
  )
};

export default Login;