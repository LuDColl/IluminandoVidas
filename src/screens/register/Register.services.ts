import axios from 'axios';

export const staticAxios = axios.create({
  baseURL: 'https://brasilapi.com.br/api',
});
