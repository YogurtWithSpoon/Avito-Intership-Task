import axios from 'axios';
import {CommentType} from 'types';

export const getPhotos = () => axios.get('https://boiling-refuge-66454.herokuapp.com/images');

export const getPhotoDetails = (id:number) => {
  return axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`);
}

// Типизацитя
export const AddComment = (id:number,data:CommentType) => {
  return axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`,data);
}