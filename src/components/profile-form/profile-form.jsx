import { useState, useRef } from 'react';
import Form from '../form/form';
import FormInputContainer from '../form/form-input-container/form-input-container';
import styles from './profile-form.module.css';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';


function ProfileForm() {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    console.log('Icon Click Callback')
  }

  return (
    <Form>
      <FormInputContainer>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={e => setValue(e.target.value)}
          value={value}
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
          onChange={e => setValue(e.target.value)}
          value={value}
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
          placeholder={'Пароль'}
          onChange={e => setValue(e.target.value)}
          value={value}
          name={'name'}
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