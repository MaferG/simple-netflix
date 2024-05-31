import axios from 'axios';

export const APIKEY = '1pH4468TwqYrwde5Pl0Xbatsv2ItztwVNnK2iP0C '

export const api = axios.create({
  baseURL: 'https://api.watchmode.com/v1/', // Reemplaza con la URL de tu API
  timeout: 5000, // Tiempo máximo de espera para las solicitudes (en milisegundos)
});

export default api;