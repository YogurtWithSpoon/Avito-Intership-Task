import React from 'react'
import {StyledContainer} from './Container.styled';

function Container({children,...props}) {
  return (
    <StyledContainer >
      {children};
    </StyledContainer>
  )
}

export default Container
