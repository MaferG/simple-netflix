import axios from 'axios';

export const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGE3MmM5NDZhYzdmOWQzOTMxMjI0OTVhMmY2MTdjOSIsInN1YiI6IjY2NTk2NTdiMDlhMzcxODQ4YzJkNGY5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YA08OSwRp3M58OgAUNtoys7pUVHbTCkg7sMAaxNQ1Pw '

export const API_URL = 'https://api.themoviedb.org/3/'

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3', // Reemplaza con la URL de tu API
  timeout: 5000, // Tiempo máximo de espera para las solicitudes (en milisegundos)
});

export default api;