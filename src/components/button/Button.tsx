import React from 'react'
import {StyledButton} from './Button.styled';

interface ButtonProps{
  children: React.ReactChild | React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined
}

function Button(props:ButtonProps):React.ReactElement {
  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  )
}

export default Button
