import axios from 'axios';
import { API } from '../../config';

const IP = `${API}/category/`;

export const getCategory = ()  => {
  return {
    type: 'GET_CATEGORY',
    payload: axios.get(`${IP}`)
  }
}