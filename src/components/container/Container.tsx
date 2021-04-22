import React from 'react'
import {StyledContainer} from './Container.styled';

interface ContainerProps{
  children: React.ReactNode | React.ReactChild;
}

function Container({children}:ContainerProps):React.ReactElement {
  return (
    <StyledContainer >
      {children};
    </StyledContainer>
  )
}

export default Container
