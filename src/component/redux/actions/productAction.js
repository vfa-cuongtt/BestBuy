// export default GET = 'GET';
// import axios from 'axios';

import {getAllCategory, getProductList} from '../../api/productApi';
import {CATEGORY_SUCCESS, PRODUCT_SUCCESS} from '../../utils/env';

// export const getListItem = () => {
//   return axios({
//     method: 'GET',
//     url: 'http://svcy3.myclass.vn/api/Product',
//   })
//     .then(resp => {
//       console.log(resp);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

export const fetchCategoryDataSuccess = payload => ({
  type: CATEGORY_SUCCESS,
  payload,
});
export const fetchAllProductDataSuccess = payload => ({
  type: PRODUCT_SUCCESS,
  payload,
});

export const fetchAllCategory = () => {
  return async dispatch => {
    try {
      const result = await getAllCategory();
      // console.log('result', result.data);
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
      console.log('getProductList', result);
      dispatch(fetchAllProductDataSuccess(result.data));
    } catch (error) {
      console.log('err', error);
    }
  };
};
