import {getPhotos} from 'api/requests';
import { AxiosResponse } from 'axios';
import {PhotoType} from 'types';

export async function loadPhotos():Promise<PhotoType[] | undefined>{
  try {
    const request:AxiosResponse = await getPhotos()
    const photos = request.data
    return photos;
  } catch (error) {
    console.log(error)
  }
}