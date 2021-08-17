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
  changePassword,
} from '../../api/productApi';

import {
  CATEGORY_SUCCESS,
  PRODUCT_SUCCESS,
  PRODUCT_BY_CATEGORY_SUCCESS,
  GET_PRODUCT_LIKED,
  GET_PRODUCT_FAVORITE,
  ORDER_PRODUCT,
  GET_PROFILE_SUCCESS,
  CLEAR_ITEM,
  SET_ACCESS_TOKEN,
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
export const clearItemInState = payload => ({
  type: CLEAR_ITEM,
  payload,
});

export const fetchAllCategory = () => {
  return async dispatch => {
    try {
      const result = await getAllCategory();
      dispatch(fetchCategoryDataSuccess(result.data.content));
    } catch (error) {
      console.log('err', error);
      dispatch({
        type: SET_ACCESS_TOKEN,
        payload: null,
      });
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
      dispatch({
        type: SET_ACCESS_TOKEN,
        payload: null,
      });
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
      dispatch({
        type: SET_ACCESS_TOKEN,
        payload: null,
      });
    }
  };
};

export const setProductLiked = id => {
  return async dispatch => {
    try {
      let token = await getAccessToken();
      const result = await likeProduct(id, token);

      // fetchProductFavorite();
    } catch (error) {
      console.log('ERROR', error);
      dispatch({
        type: SET_ACCESS_TOKEN,
        payload: null,
      });
    }
  };
};

export const setUnlikeProduct = id => {
  return async dispatch => {
    try {
      let token = await getAccessToken();
      const result = await unlikeProduct(id, token);
    } catch (error) {
      console.log('ERROR', error);
      dispatch({
        type: SET_ACCESS_TOKEN,
        payload: null,
      });
    }
  };
};

export const fetchProductFavorite = () => {
  return async dispatch => {
    try {
      let token = await getAccessToken();
      const result = await getProductFavorite(token);
      dispatch(getProductFavoriteSuccess(result.data.content));
    } catch (error) {
      console.log('ERROR', error);
      dispatch({
        type: SET_ACCESS_TOKEN,
        payload: null,
      });
    }
  };
};

export const fetchOtherProduct = orderArr => {
  return async dispatch => {
    try {
      let email = await getEmail();
      const result = await orderProduct(orderArr, email);
      if (result.data.statusCode === 200) {
        dispatch(clearItemInState());
      }
    } catch (error) {
      console.log('ERROR', error);
      dispatch({
        type: SET_ACCESS_TOKEN,
        payload: null,
      });
    }
  };
};

export const setProductToBag = product => {
  return async dispatch => {
    try {
      let order = {
        productId: product.id,
        quantity: 1,
        image: product.image,
        name: product.name,
        price: product.price,
      };
      dispatch(setProductOrder(order));
    } catch (error) {
      console.log('ERROR', error);
      dispatch({
        type: SET_ACCESS_TOKEN,
        payload: null,
      });
    }
  };
};

export const fetchProfile = () => {
  return async dispatch => {
    try {
      let token = await getAccessToken();
      const result = await getProfile(token);
      dispatch(getProfileSuccess(result.data.content));
    } catch (error) {
      console.log('ERROR', error);
      dispatch({
        type: SET_ACCESS_TOKEN,
        payload: null,
      });
    }
  };
};

export const resetPassword = pass => {
  return async dispatch => {
    try {
      let token = await getAccessToken();
      const result = await changePassword(pass, token);
    } catch (error) {
      console.log('ERROR', error);
      dispatch({
        type: SET_ACCESS_TOKEN,
        payload: null,
      });
    }
  };
};
