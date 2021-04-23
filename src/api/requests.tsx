import axios, { AxiosResponse } from 'axios';
import {CommentTypeSubmit} from 'types';

export const getPhotos= ():Promise<AxiosResponse>  => axios.get('https://boiling-refuge-66454.herokuapp.com/images');

export const getPhotoDetails = (id:string):Promise<AxiosResponse>=> {
  return axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`);
}

// Типизация
export const AddComment = (id:string,data:CommentTypeSubmit):Promise<AxiosResponse> => {
  return axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`,data);
}