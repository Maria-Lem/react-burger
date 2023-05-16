import { useState, useRef } from 'react';
import Form from '../form/form';
import FormInputContainer from '../form/form-input-container/form-input-container';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';


function ProfileForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const target = e.target;

    setForm(prevFormData => ({
      ...prevFormData,
      [target.name]: target.value,
    }))
  };

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
          onChange={handleChange}
          value={form.name}
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
          onChange={handleChange}
          value={form.email}
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
          onChange={handleChange}
          value={form.password}
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