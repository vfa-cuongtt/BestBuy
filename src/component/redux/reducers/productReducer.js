import {
  CATEGORY_SUCCESS,
  PRODUCT_SUCCESS,
  PRODUCT_BY_CATEGORY_SUCCESS,
} from '../../utils/env';
const initialState = {
  categoriesItem: [],
  productListItem: [],
  productByCategory: [],
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
      console.log('PRODUCT_BY_CATEGORY_SUCCESS', action.payload);
      state.productByCategory = action.payload;
      return {...state};
    default:
      return {...state};
  }
};

export default productReducer;
