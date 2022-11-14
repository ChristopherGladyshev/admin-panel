import React from 'react'
import './Input.scss'

interface IInput {
  type: string,
  description?: string,
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void
}

const Input = ({ type, description, onInput }: IInput) => {
  return (
    <label className='input__label'>
      {description}
      <input className='input' type={type} onInput={onInput}/>
    </label>
  )
}

export default Input;
