// axiosInstance.js
import axios from 'axios';

const apiClient  = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.API_BASE_URL,
  headers: { 'Content-Type': 'application/json' } 
});

export default apiClient ;
