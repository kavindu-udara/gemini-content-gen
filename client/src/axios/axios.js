// axiosInstance.js
import axios from 'axios';

const apiClient  = axios.create({
  baseURL: 'http://localhost:3000/api', // Set your base URL here
  // timeout: 1000, // Set a timeout for requests (optional)
  headers: { 'Content-Type': 'application/json' } // Set default headers (optional)
});

export default apiClient ;
