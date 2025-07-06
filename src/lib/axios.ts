import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://moralpump-us.backendless.app',
});
