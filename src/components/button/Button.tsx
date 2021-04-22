import React from 'react'
import {StyledButton} from './Button.styled';

interface ButtonProps{
  children: React.ReactChild | React.ReactNode;
}

function Button({children}:ButtonProps):React.ReactElement {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}

export default Button
