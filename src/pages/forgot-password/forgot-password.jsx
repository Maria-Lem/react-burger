import { useState, useRef } from 'react';
import styles from './forgot-password.module.css';

import Form from '../../components/form/form';
import FormInputContainer from '../../components/form/form-input-container/form-input-container';
import FormSubmitBtn from '../../components/form/form-submit-btn/form-submit-btn';
import FormAdditionalActions from '../../components/form/form-additional-actions/form-additional-actions';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

function ForgotPassword() {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    console.log('Icon Click Callback')
  }
  return (
    <main className={`${styles.main}`}>
      <Form title="Восстановление пароля">
        <FormInputContainer>
          <Input
            type={'text'}
            placeholder={'Укажите e-mail'}
            onChange={e => setValue(e.target.value)}
            value={value}
            name={'name'}
            error={false}
            ref={inputRef}
            onIconClick={onIconClick}
            errorText={'Ошибка'}
            size={'default'}
            extraClass={`${styles.input}`}
          />
        </FormInputContainer>
        <FormSubmitBtn buttonName="Восстановить" />
        <FormAdditionalActions text="Вспомнили пароль?" linkName="Войти" pageName="login" />
      </Form>
    </main>
  )
};

export default ForgotPassword;