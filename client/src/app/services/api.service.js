import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
const user = JSON.parse(localStorage.getItem('user') || '{}');

if (user.token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
}

export const convertUrl = (uri) => {
  return `/${uri.join('/')}`;
}

export const postAPI = (uri) => {
  return axios.post(convertUrl(uri));
}

export const getApi = (uri) => {
  return axios.get(convertUrl(uri));
}

export const postApi = (uri, body) => {
  return axios.post(convertUrl(uri), body);
}

export const putApi = (uri, body) => {
  return axios.put(convertUrl(uri), body);
}

export const deleteApi = (uri, body) => {
  return axios.delete(convertUrl(uri), body);
}

export const deleteAPI = (uri, body) => {
  return axios.delete(convertUrl(uri), body);
}
