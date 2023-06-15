import { useState, useRef, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './profile-form.module.css';

import { editUser } from '../../services/actions/user';
import { getCookie } from '../../utils/utils';

import Form from '../form/form';
import FormInputContainer from '../form/form-input-container/form-input-container';
import FormSubmitBtn from '../form/form-submit-btn/form-submit-btn';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

function ProfileForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isFormChanged, setIsFormChanged] = useState(false);
  const [active, setActive] = useState('');
  // console.log('active: ', active);
  // console.log('isFormChanged: ', isFormChanged);

  const inputNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);
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
  }, [user]);

  const handleFocus = useCallback((inputType) => {
    setActive(inputType);
  }, []);

  const handleBlur = useCallback(() => {
    setActive('');
  }, []);
  
  const handleChange = (e, dataValue) => {
    console.log('dataValue: ', dataValue);
    const target = e.target;
    const newValue = e.target.value;
    console.log('newValue: ', newValue);

    setForm(prevFormData => ({
      ...prevFormData,
      [target.name]: newValue,
    }));

    newValue === dataValue ? setIsFormChanged(false) : setIsFormChanged(true);
  };

  const handleCancel = useCallback(() => {
    setForm(prevFormData => ({
      ...prevFormData,
      name: user.name,
      email: user.email,
    }));
    setIsFormChanged(false);

  }, [user.email, user.name]);

  const onNameIconClick = () => {
    // setForm(formData => ({
    //   ...formData,
    //   name: user.name
    // }));

    setTimeout(() => inputNameRef.current.focus(), 0);
  };

  const onEmailIconClick = () => {
    // setForm(formData => ({
    //   ...formData,
    //   email: user.email
    // }));

    setTimeout(() => inputEmailRef.current.focus(), 0);
  };

  const onPasswordIconClick = () => {
    // setForm(formData => ({
    //   ...formData,
    //   password: ''
    // }));

    setTimeout(() => inputPasswordRef.current.focus(), 0);
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('clicked');
    dispatch(editUser(form.name, form.email, form.password, accessToken));
    setIsFormChanged(false);
  }, [accessToken, dispatch, form.email, form.name, form.password]);

  return (
    <Form handleSubmit={handleSubmit}>
      <FormInputContainer>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={(e) => handleChange(e, user.name)}
          onFocus={() => handleFocus('name')}
          onBlur={handleBlur}
          onIconClick={onNameIconClick}
          // onIconClick={(e) => onIconClick(e, user.name)}
          ref={inputNameRef}
          value={form.name}
          name={'name'}
          icon={active === 'name' ? 'CloseIcon' : 'EditIcon'}
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
          onFocus={() => handleFocus('email')}
          onBlur={handleBlur}
          onIconClick={onEmailIconClick}
          // onIconClick={(e) => onIconClick(e, user.email)}
          ref={inputEmailRef}
          value={form.email}
          name={'email'}
          icon={active === 'email' ? 'CloseIcon' : 'EditIcon'}
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
            onFocus={() => handleFocus('password')}
            onBlur={handleBlur}
            onIconClick={onPasswordIconClick}
            // onIconClick={(e) => onIconClick(e, user.password)}
            ref={inputPasswordRef}
            value={form.password}
            name={'password'}
            icon={active === 'password' ? 'CloseIcon' : 'EditIcon'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
          />
      </FormInputContainer>
      {isFormChanged && <div className={styles.btnContainer}>
        <Button htmlType="button" type="secondary" size="medium" onClick={handleCancel}>
          Отмена
        </Button>
        <FormSubmitBtn buttonName="Сохранить" />
      </div>}
    </Form>
  );
}

export default ProfileForm;