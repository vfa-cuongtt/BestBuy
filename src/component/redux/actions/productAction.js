// export default GET = 'GET';
// import axios from 'axios';

import {
  getAllCategory,
  getProductList,
  getProductByCategory,
} from '../../api/productApi';
import {
  CATEGORY_SUCCESS,
  PRODUCT_SUCCESS,
  PRODUCT_BY_CATEGORY_SUCCESS,
} from '../../utils/env';

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

export const fetchAllCategory = () => {
  return async dispatch => {
    try {
      const result = await getAllCategory();
      dispatch(fetchCategoryDataSuccess(result.data));
    } catch (error) {
      console.log('err', error);
    }
  };
};

export const fetchAllProduct = () => {
  return async dispatch => {
    try {
      const result = await getProductList();
      console.log('fetchAllProduct', result.data);
      dispatch(fetchAllProductDataSuccess(result.data));
    } catch (error) {
      console.log('err', error);
    }
  };
};

export const fetchProductByCategory = id => {
  return async dispatch => {
    try {
      const result = await getProductByCategory(id);
      dispatch(fetchProductByCategorySuccess(result.data.content));
    } catch (error) {
      console.log('err', error);
    }
  };
};
