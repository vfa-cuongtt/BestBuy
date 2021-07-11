import axios from 'axios';
import {BASE_URL, userSubfix, POST} from '../utils/env';

export const userSignup = data => {
  return axios({
    url: `${BASE_URL}/${userSubfix}/signup`,
    method: POST,
    data,
  });
};

export const userLogin = data => {
  return axios({
    url: `${BASE_URL}/${userSubfix}/signin`,
    method: POST,
    data,
  });
};
