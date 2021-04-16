import {getPhotoDetails} from '../../../api/requests';


export const loadDetails = async (id) => {
  try {
    const request =await getPhotoDetails(id);
    const {data} = request
    return data;
  } catch (error) {
    console.log(error)
  }
}