import axios from 'axios';
import { API } from '../../config';

const IP = `${API}/company/`;

export const getCompany = ()  => {
  return {
    type: 'GET_COMPANY',
    payload: axios.get(`${IP}`)
  }
}

export const addCompany = (dataCompany, token) => {
  return {
    type: 'ADD_COMPANY',
    payload: axios({
      method: 'POST',
      url: IP,
      data: dataCompany,
      headers : {
        'content-Type': 'application/x-www-form-urlencoded',
        'x-access-token': token,
      }
    })
  }
}