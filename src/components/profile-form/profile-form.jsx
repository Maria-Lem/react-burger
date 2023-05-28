import { useState, useRef, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './profile-form.module.css';

import Form from '../form/form';
import FormInputContainer from '../form/form-input-container/form-input-container';
import FormSubmitBtn from '../form/form-submit-btn/form-submit-btn';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { editUser } from '../../services/actions/user';
import { getCookie } from '../../utils/utils';

function ProfileForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isFormChanged, setIsFormChanged] = useState(false);
  console.log('isFormChanged: ', isFormChanged);

  const dispatch = useDispatch();

  const { user } = useSelector(store => store.user);
  const accessToken = 'Bearer ' + getCookie('accessToken');

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
  
  const handleChange = (e, dataValue) => {
    console.log('dataValue: ', dataValue);
    const target = e.target;
    const newValue = e?.target?.value;
    console.log('newValue: ', newValue);

    setForm(prevFormData => ({
      ...prevFormData,
      [target.name]: newValue,
    }));

    newValue === dataValue ? setIsFormChanged(false) : setIsFormChanged(true);
  };

  const handleCancel = useCallback((e) => {
    setIsFormChanged(false);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('clicked');
    dispatch(editUser(form.name, form.email, form.password, accessToken));
    setIsFormChanged(false);
  }, [accessToken, dispatch, form.email, form.name, form.password])

  return (
    <Form>
      <FormInputContainer>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={(e) => handleChange(e, user.name)}
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
          onChange={(e) => handleChange(e, user.email)}
          value={form.email}
          name={'email'}
          icon={'EditIcon'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
        />
      </FormInputContainer>
      <FormInputContainer>
        <Input
            type={'text'}
            placeholder={'Пароль'}
            onChange={(e) => handleChange(e, user.password)}
            value={form.password}
            name={'password'}
            icon={'EditIcon'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
          />
      </FormInputContainer>
      {isFormChanged && <div className={styles.btnContainer}>
        <Button htmlType="button" type="secondary" size="medium" onClick={handleCancel}>
          Отмена
        </Button>
        <FormSubmitBtn buttonName="Сохранить" handleSubmit={handleSubmit} />
      </div>}
    </Form>
  );
}

export default ProfileForm;