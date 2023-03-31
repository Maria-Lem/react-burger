import { useState, useRef } from 'react';
import Form from '../form/form';
import FormInputContainer from '../form/form-input-container/form-input-container';
import styles from './profile-form.module.css';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';


function ProfileForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputRef = useRef(null);

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    console.log('Icon Click Callback')
  };

  return (
    <Form>
      <FormInputContainer>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={e => setName(e.target.value)}
          value={name}
          name={'name'}
          icon={'EditIcon'}
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
          placeholder={'Логин'}
          onChange={e => setEmail(e.target.value)}
          value={email}
          name={'email'}
          icon={'EditIcon'}
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
          onChange={e => setPassword(e.target.value)}
          value={password}
          name={'password'}
          icon={'EditIcon'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
        />
      </FormInputContainer>
    </Form>
  );
}

export default ProfileForm;