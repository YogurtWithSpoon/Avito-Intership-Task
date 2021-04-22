import React from 'react'
import {StyledTitle} from './Title.styled';

interface TitleProps {
  children: React.ReactNode | React.ReactChild;
}

function Title({children}:TitleProps):React.ReactElement{
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  )
}

export default Title
