import React from 'react'
import {StyledTitle} from './Title.styled';

function Title({children,...props}) {
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  )
}

export default Title
