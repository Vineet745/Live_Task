import axios from 'axios';
import {getToken} from '../utils/token';

const instance = axios.create({
  baseURL: 'https://livetask-ai.hackerkernel.co/api/',
  headers: {
    'Content-Type': 'application/json',
    "role":"TCH"
  },
  timeout: 60000,
  timeoutErrorMessage: 'Request Timed Out',
});

instance.interceptors.request.use(
  async config => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

export default instance;
