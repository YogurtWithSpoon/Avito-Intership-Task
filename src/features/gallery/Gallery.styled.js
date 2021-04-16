import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const GalleryContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
`

export const Photo = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

export const PhotoContainer = styled(Link)`
  flex: 1 0 230px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 30px;
`