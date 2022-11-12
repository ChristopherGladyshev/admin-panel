import React from 'react'
import './Input.scss'

interface IInput {
  type: string
  description?: string
}

const Input = ({ type, description }: IInput) => {
  return (
    <label className='input__label'>
      {description}
      <input className='input' type={type} />
    </label>
  )
}

export default Input;
