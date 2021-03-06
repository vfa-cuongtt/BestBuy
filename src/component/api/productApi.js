import axios from 'axios';
import {BASE_URL, productSubfix, GET, POST} from '../utils/env';

export const getAllCategory = data => {
  return axios({
    url: `${BASE_URL}/${productSubfix}/getAllCategory`,
    method: GET,
    data,
  });
};

export const getProductList = data => {
  return axios({
    url: `${BASE_URL}/${productSubfix}`,
    method: GET,
    data,
  });
};

export const getProductByCategory = id => {
  console.log('getProductByCategory', id);
  return axios({
    url: `${BASE_URL}/${productSubfix}/getProductByCategory?categoryId=${id}`,
    method: GET,
  });
};
