import axios from 'axios';
import { API } from '../../config';

const IP = `${API}`;

export const login = data => {
  return {
    type: 'LOGIN_USER',
    payload: axios.post(`${IP}/auth/login`, data),
  }
}

export const register = data => {
  return {
    type: 'REGISTER_USER',
    payload: axios.post(`${IP}/auth/register`, data),

  }
}