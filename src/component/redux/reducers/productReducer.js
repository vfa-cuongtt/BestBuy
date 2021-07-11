import {CATEGORY_SUCCESS, PRODUCT_SUCCESS} from '../../utils/env';
const initialState = {
  productListItem: [],
  categoriesItem: [],
};

const productReducer = (state = {...initialState}, action) => {
  switch (action.type) {
    case CATEGORY_SUCCESS:
      state.categoriesItem = action.payload;
      return {...state};
    case PRODUCT_SUCCESS:
      state.productListItem = action.payload;
      return {...state};
    default:
      return {...state};
  }
};

export default productReducer;
