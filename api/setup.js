import axios from 'axios';

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export const apiInstance = axios.create({
  baseURL,
  headers: {
    'content-type': 'application/json',
  },
});
