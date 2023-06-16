import { useState } from 'react';

export function useForm( inputValues = {} ) {
  const [form, setForm] = useState(inputValues);

  const handleChange = (e) => {
    const target = e.target;

    setForm(prevFormData => {
      return {
        ...prevFormData,
        [target.name]: target.value,
      }
    });
  };

  return { form, handleChange, setForm };
}