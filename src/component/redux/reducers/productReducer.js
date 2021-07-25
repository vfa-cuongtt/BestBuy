import {setFavoriteData} from '../../../common/common';
import {
  CATEGORY_SUCCESS,
  PRODUCT_SUCCESS,
  PRODUCT_BY_CATEGORY_SUCCESS,
  GET_PRODUCT_LIKED,
  SET_PRODUCT_LIKED,
  GET_PRODUCT_FAVORITE,
} from '../../utils/env';
const initialState = {
  categoriesItem: [],
  productListItem: [],
  productByCategory: [],
  productFavorite: [],
};

const productReducer = (state = {...initialState}, action) => {
  switch (action.type) {
    case CATEGORY_SUCCESS:
      state.categoriesItem = action.payload;
      return {...state};
    case PRODUCT_SUCCESS:
      state.productListItem = action.payload;
      return {...state};
    case PRODUCT_BY_CATEGORY_SUCCESS:
      state.productByCategory = action.payload;
      return {...state};
    case GET_PRODUCT_FAVORITE:
      state.productFavorite = action.payload;
      return {...state};
    default:
      return {...state};
  }
};

export default productReducer;
