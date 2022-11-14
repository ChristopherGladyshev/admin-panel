import React from 'react';
import { Input } from '../../elements';
import './Home.scss';
import { AuthenticationForm } from '../../components';

const Home = () => {
  return (
    <div className='home'>
      <Input description='Title' type='text'></Input>
      <Input description='description' type='text'></Input>
      <Input description='product_text' type='text'></Input>
      <Input description='price' type='text'></Input>
      <Input description='' type='text'></Input>
      <Input description='' type='text'></Input>
      <Input description='' type='text'></Input>
      <AuthenticationForm></AuthenticationForm>
    </div>
  )
}

export default Home;
