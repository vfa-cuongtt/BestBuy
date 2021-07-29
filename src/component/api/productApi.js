import axios from 'axios';
import {getAccessToken} from '../utils/storage';
import {
  BASE_URL,
  productSubfix,
  userSubfix,
  GET,
  POST,
  BEARER,
  TOKEN,
} from '../utils/env';

/**
 * Get All Category
 * @param {*} data
 * @returns
 */
export const getAllCategory = data => {
  return axios({
    url: `${BASE_URL}/${productSubfix}/getAllCategory`,
    method: GET,
    data,
  });
};

/**
 * Get Product list
 * @param {*} data
 * @returns
 */
export const getProductList = data => {
  return axios({
    url: `${BASE_URL}/${productSubfix}`,
    method: GET,
    data,
  });
};

/**
 * Get Product by category
 * @param {*} id
 * @returns
 */
export const getProductByCategory = id => {
  // console.log('getProductByCategory', id);
  return axios({
    url: `${BASE_URL}/${productSubfix}/getProductByCategory?categoryId=${id}`,
    method: GET,
  });
};

/**
 * SET Product liked
 * @param {*} productId
 * @returns
 */
export const likeProduct = productId => {
  console.log('Product_id', productId);
  return axios({
    url: `${BASE_URL}/${userSubfix}/like?productId=${productId}`,
    method: GET,
    headers: {Authorization: `${BEARER}${TOKEN}`},
  });
};

/**
 * SET Product unlike
 * @param {*} productId
 * @returns
 */
export const unlikeProduct = productId => {
  console.log('Product_id', productId);
  return axios({
    url: `${BASE_URL}/${userSubfix}/unlike?productId=${productId}`,
    method: GET,
    headers: {Authorization: `${BEARER}${TOKEN}`},
  });
};

/**
 * Get Product favorite
 * @param {*} token
 * @returns
 */
export const getProductFavorite = token => {
  // console.log('Token___', `${BEARER} ${token}`);

  return axios({
    url: `${BASE_URL}/${userSubfix}/getproductfavorite`,
    method: GET,
    headers: {Authorization: `${BEARER}${TOKEN}`}, //=> Test Token
    // headers: {Authorization: `${BEARER}${token}`},
  });
};

export const orderProduct = (orderArr, email) => {
  return axios({
    url: `${BASE_URL}/${userSubfix}/`,
    method: POST,
    data: {
      orderDetail: orderArr,
      email: email,
    },
  });
};
