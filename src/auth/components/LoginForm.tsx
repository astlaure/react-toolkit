import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormInputs {
  email: string;
  password: string;
  rememberMe?: boolean;
}

const defaultSchema = yup.object({
  email: yup.string().required('The email is required'),
  password: yup.string().required('The password is required'),
}).required();

export interface Props {
  schema?: yup.ObjectSchema<any>;
  onSubmit: (data: FormInputs) => any;
}

function LoginForm(props: Props) {
  const { schema, onSubmit } = props;
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    resolver: yupResolver(schema || defaultSchema),
  });

  return (
    <form action="#" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">
          Email
          <input type="text" id="id" {...register('email')} />
        </label>
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <input type="password" id="password" {...register('password')} />
        </label>
        <p>{errors.password?.message}</p>
      </div>
      <label htmlFor="remember-me">
        <input type="checkbox" id="remember-me" {...register('rememberMe')} />
        Remember Me
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}

export default LoginForm;
