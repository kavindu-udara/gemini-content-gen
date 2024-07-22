// axiosInstance.js
import axios from 'axios';

const apiClient  = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' } 
});

export default apiClient ;
