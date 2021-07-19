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
