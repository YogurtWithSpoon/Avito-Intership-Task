import axios from 'axios';

export const getPhotos = () => axios.get('https://boiling-refuge-66454.herokuapp.com/images');

export const getPhotoDetails = (id) => {
  return axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`);
}

export const AddComment = (id,data) => {
  return axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`,data);
}