import axios from 'axios';
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
export const likeProduct = (productId, token) => {
  return axios({
    url: `${BASE_URL}/${userSubfix}/like?productId=${productId}`,
    method: GET,
    headers: {Authorization: `${BEARER}${token}`},
  });
};

/**
 * SET Product unlike
 * @param {*} productId
 * @returns
 */
export const unlikeProduct = (productId, token) => {
  return axios({
    url: `${BASE_URL}/${userSubfix}/unlike?productId=${productId}`,
    method: GET,
    headers: {Authorization: `${BEARER}${token}`},
  });
};

/**
 * Get Product favorite
 * @param {*} token
 * @returns
 */
export const getProductFavorite = token => {
  return axios({
    url: `${BASE_URL}/${userSubfix}/getproductfavorite`,
    method: GET,
    headers: {Authorization: `${BEARER}${token}`},
  });
};

/**
 * Order product
 * @param {*} orderArr
 * @param {*} email
 * @returns
 */
export const orderProduct = (orderArr, email) => {
  return axios({
    url: `${BASE_URL}/${userSubfix}/order`,
    method: POST,
    data: {
      orderDetail: orderArr,
      email: email,
    },
  });
};

/**
 * Get user profile
 * @param {*} token
 * @returns
 */
export const getProfile = token => {
  return axios({
    url: `${BASE_URL}/${userSubfix}/getProfile`,
    method: POST,
    headers: {Authorization: `${BEARER}${token}`},
  });
};

/**
 * Change password
 * @param {*} pass
 * @param {*} token
 * @returns
 */
export const changePassword = (pass, token) => {
  return axios({
    url: `${BASE_URL}/${userSubfix}/changePassword`,
    method: POST,
    headers: {Authorization: `${BEARER}${token}`},
    data: {
      newPassword: pass,
    },
  });
};
