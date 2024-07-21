// axiosInstance.js
import axios from 'axios';

const apiClient  = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000/api',
  headers: { 'Content-Type': 'application/json' } 
});

export default apiClient ;
