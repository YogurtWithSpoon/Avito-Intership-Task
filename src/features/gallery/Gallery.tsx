import React,{useState,useEffect} from 'react';
import {loadPhotos} from './helpers/loadPhotos';
import {GalleryContainer,PhotoContainer,Photo} from './Gallery.styled';
import {PhotoType} from 'types';

function Gallery() {
  const [photos, setPhotos] = useState<PhotoType[] | undefined>([]);

  useEffect(() => {
    async function fetch(){
      setPhotos(await loadPhotos());
    }
    fetch();
  },[])

  return (
    <GalleryContainer>
      {photos?.map((photo:PhotoType):React.ReactNode => (
          <PhotoContainer to={`/${photo.id}/comments`} key={photo.id}>
            <Photo src={photo.url} alt='gallery item'/>
          </PhotoContainer>
      ))}
    </GalleryContainer>
  )
}

export default Gallery
