import { useState, useRef, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './profile-form.module.css';

import Form from '../form/form';
import FormInputContainer from '../form/form-input-container/form-input-container';
import FormSubmitBtn from '../form/form-submit-btn/form-submit-btn';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

function ProfileForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const { user } = useSelector(store => store.user);

  useEffect(() => {
    if (user) {
      console.log('user: ', user);

      setForm(prevFormData => ({
        ...prevFormData,
        name: user.name,
        email: user.email,
      }))
    }
  }, [user])
  
  const handleChange = (e) => {
    const target = e.target;

    setForm(prevFormData => ({
      ...prevFormData,
      [target.name]: target.value,
    }))
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('clicked')
  }, [])

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
          errorText={'Ошибка'}
          size={'default'}
        />
      </FormInputContainer>
      <FormInputContainer>
      <PasswordInput
        onChange={handleChange}
        value={form.password}
        name={'password'}
        icon="EditIcon"
      />
      </FormInputContainer>
      <div className={styles.btnContainer}>
        <Button htmlType="button" type="secondary" size="medium">
          Отмена
        </Button>
        <FormSubmitBtn buttonName="Сохранить" handleSubmit={handleSubmit} />
      </div>
    </Form>
  );
}

export default ProfileForm;