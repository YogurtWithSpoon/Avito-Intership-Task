import {getPhotos} from 'api/requests';

export async function loadPhotos(){
  try {
    const request = await getPhotos();
    const photos = request.data
    return photos;
  } catch (error) {
    console.log(error)
  }
}