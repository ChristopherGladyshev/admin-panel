import React, { useEffect, useState } from 'react'
import { Input } from '../../elements';
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { registration } from '../../store/authentication/authenticationSlice';

const AuthenticationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const emailHeandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  }

  const passwordHeandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  useEffect(() => {
    console.log(email, password);
    dispatch(registration({ email, password }));
  }, [email, password])


  return (
    <div>
      AuthenticationForm
      <Input type='email' description='email' onInput={emailHeandler.bind(this)} />
      <Input type='password' description='password' onInput={passwordHeandler.bind(this)} />
    </div>
  )
}


export default AuthenticationForm;
