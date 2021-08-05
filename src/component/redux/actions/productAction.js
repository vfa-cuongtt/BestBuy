// export default GET = 'GET';
// import axios from 'axios';

import {
  getAllCategory,
  getProductList,
  getProductByCategory,
  likeProduct,
  getProductFavorite,
  unlikeProduct,
  orderProduct,
  getProfile,
} from '../../api/productApi';

import {
  CATEGORY_SUCCESS,
  PRODUCT_SUCCESS,
  PRODUCT_BY_CATEGORY_SUCCESS,
  GET_PRODUCT_LIKED,
  SET_PRODUCT_LIKED,
  GET_PRODUCT_FAVORITE,
  ORDER_PRODUCT,
  GET_PROFILE_SUCCESS,
} from '../../utils/env';
import {getAccessToken, getEmail} from '../../utils/storage';

export const fetchCategoryDataSuccess = payload => ({
  type: CATEGORY_SUCCESS,
  payload,
});
export const fetchAllProductDataSuccess = payload => ({
  type: PRODUCT_SUCCESS,
  payload,
});
export const fetchProductByCategorySuccess = payload => ({
  type: PRODUCT_BY_CATEGORY_SUCCESS,
  payload,
});
export const getProductLikedSuccess = payload => ({
  type: GET_PRODUCT_LIKED,
  payload,
});
export const getProductFavoriteSuccess = payload => ({
  type: GET_PRODUCT_FAVORITE,
  payload,
});
export const setProductOrder = payload => ({
  type: ORDER_PRODUCT,
  payload,
});
export const getProfileSuccess = payload => ({
  type: GET_PROFILE_SUCCESS,
  payload,
});

export const fetchAllCategory = () => {
  return async dispatch => {
    try {
      const result = await getAllCategory();
      dispatch(fetchCategoryDataSuccess(result.data.content));
    } catch (error) {
      console.log('err', error);
    }
  };
};

export const fetchAllProduct = () => {
  return async dispatch => {
    try {
      const result = await getProductList();
      let arr = result.data.content;

      arr.forEach((item, i) => {
        item.size = JSON.parse(`${item.size}`);
        item.relatedProducts = JSON.parse(`${item.relatedProducts}`);
        item.categories = JSON.parse(`${item.categories}`);
        item.shortDescription = item.shortDescription.replace('\r\n', '');
      });

      dispatch(fetchAllProductDataSuccess(arr));
    } catch (error) {
      console.log('err', error);
    }
  };
};

export const fetchProductByCategory = id => {
  return async dispatch => {
    try {
      const result = await getProductByCategory(id);
      let arr = result.data.content;

      arr.forEach((item, i) => {
        item.description = item.description.replace('\r\n\r\n', '');
        item.shortDescription = item.shortDescription.replace('\r\n', '');
      });
      dispatch(fetchProductByCategorySuccess(arr));
    } catch (error) {
      console.log('err', error);
    }
  };
};

export const setProductLiked = id => {
  return async dispatch => {
    try {
      // console.log('setProductLiked', id);
      const result = await likeProduct(id);
      console.log('setProductLiked', result.data);
      // fetchProductFavorite();
    } catch (error) {
      console.log('ERROR', error);
    }
  };
};

export const setUnlikeProduct = id => {
  return async dispatch => {
    try {
      const result = await unlikeProduct(id);
      console.log('setUnlikeProduct', result.data);
    } catch (error) {
      console.log('ERROR', error);
    }
  };
};

export const fetchProductFavorite = () => {
  return async dispatch => {
    try {
      console.log('call fetchProductFavorite()');
      let token = await getAccessToken();
      const result = await getProductFavorite(token);
      console.log('fetchProductFavorite__result', result.data.content);
      dispatch(getProductFavoriteSuccess(result.data.content));
    } catch (error) {
      console.log('ERROR', error);
    }
  };
};

export const fetchOtherProduct = orderArr => {
  return async dispatch => {
    try {
      let email = await getEmail();
      console.log('orderArr', orderArr);

      const result = await orderProduct(orderArr, email);
      console.log('fetchOtherProduct_result', result.data);
    } catch (error) {
      console.log('ERROR', error);
    }
  };
};

export const setProductToBag = product => {
  return async dispatch => {
    try {
      // console.log('setProductToBag', product);
      let order = {
        productId: product.id,
        quantity: 1,
        image: product.image,
        name: product.name,
        price: product.price,
      };
      console.log('setProductToBag', order);
      dispatch(setProductOrder(order));
    } catch (error) {
      console.log('ERROR', error);
    }
  };
};

export const fetchProfile = () => {
  // getProfile;
  return async dispatch => {
    try {
      let token = await getAccessToken();
      // console.log('fetchProfile_token', token);
      const result = await getProfile(token);
      dispatch(getProfileSuccess(result.data.content));
    } catch (error) {
      console.log('ERROR', error);
    }
  };
};
