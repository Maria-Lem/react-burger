import { ChangeEvent, useState } from 'react';

interface IFormProps {
  [name: string]: string;
}

export function useForm( inputValues: IFormProps ) {
  const [form, setForm] = useState<IFormProps>(inputValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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