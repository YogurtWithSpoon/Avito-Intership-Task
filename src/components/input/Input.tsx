import React, { ChangeEvent } from 'react'
import {StyledInput} from './Input.styled';

interface InputProps{
  onChange: (e:ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  name: string;
}

function Input(props:InputProps):React.ReactElement {
  return (
    <StyledInput {...props}/>
  )
}

export default Input
