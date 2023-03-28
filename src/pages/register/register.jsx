import { useState, useRef } from 'react';
import styles from './register.module.css';

import Form from '../../components/form/form';
import FormInputContainer from '../../components/form/form-input-container/form-input-container';
import FormSubmitBtn from '../../components/form/form-submit-btn/form-submit-btn';
import FormAdditionalActions from '../../components/form/form-additional-actions/form-additional-actions';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

function Register() {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    console.log('Icon Click Callback')
  }
  return (
    <main className={`${styles.main}`}>
      <Form title="Регистрация">
        <FormInputContainer>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={e => setValue(e.target.value)}
            value={value}
            name={'name'}
            error={false}
            ref={inputRef}
            onIconClick={onIconClick}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mb-6"
          />
        </FormInputContainer>
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
            extraClass={`${styles.input}`}
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
            extraClass={`${styles.input}`}
          />
        </FormInputContainer>
        <FormSubmitBtn buttonName="Зарегистрироваться" />
        <FormAdditionalActions text="Уже зарегистрированы?" linkName="Войти" pageName="login" />
      </Form>
    </main>
  )
};

export default Register;