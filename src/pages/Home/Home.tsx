import React from 'react';
import { Input } from '../../elements';
import './Home.scss';
import { AuthenticationForm } from '../../components';
import { useAppSelector } from '../../hook/hook';

const Home = () => {
  const isAuth = useAppSelector(state => state.user.isAuth);

  if (isAuth) {
    return (<div className='home'>
      <Input description='Title' type='text'></Input>
      <Input description='description' type='text'></Input>
      <Input description='product_text' type='text'></Input>
      <Input description='price' type='text'></Input>
      <Input description='' type='text'></Input>
      <Input description='' type='text'></Input>
      <Input description='' type='text'></Input>
    </div>)
  }

  return (
    <div className='home'>
      <AuthenticationForm></AuthenticationForm>
    </div>
  )
}

export default Home;
