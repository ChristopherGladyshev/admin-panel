import React, { useEffect, useState } from 'react'
import { Input } from '../../elements';

const AuthenticationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHeandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  }

  const passwordHeandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  useEffect(() => {
    console.log(email, password);
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
