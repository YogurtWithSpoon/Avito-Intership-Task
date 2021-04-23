import {getPhotoDetails} from 'api/requests';
import { AxiosResponse } from 'axios';


export const loadDetails = async (id:string):Promise<AxiosResponse | undefined> => {
  try {
    const request:AxiosResponse =await getPhotoDetails(id)
    const {data} = request
    return data;
  } catch (error) {
    console.log(error)
  }
}