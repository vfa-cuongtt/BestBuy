import {setFavoriteData} from '../../../common/common';
import {
  CATEGORY_SUCCESS,
  PRODUCT_SUCCESS,
  PRODUCT_BY_CATEGORY_SUCCESS,
  GET_PRODUCT_LIKED,
  SET_PRODUCT_LIKED,
  GET_PRODUCT_FAVORITE,
  ORDER_PRODUCT,
} from '../../utils/env';
const initialState = {
  categoriesItem: [],
  productListItem: [],
  productByCategory: [],
  productFavorite: [],
  orderProduct: [],
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
    case ORDER_PRODUCT:
      if (state.orderProduct.length) {
        const productInBagIndex = state.orderProduct.findIndex(
          item => item.productId === action.payload.productId,
        );
        console.log('productInBagIndex_', productInBagIndex);
        if (productInBagIndex >= 0) {
          state.orderProduct[productInBagIndex].quantity =
            state.orderProduct[productInBagIndex].quantity + 1;
        } else {
          state.orderProduct.push(action.payload);
        }
      } else {
        state.orderProduct.push(action.payload);
      }

      console.log('state.orderProduct', state.orderProduct);
    default:
      return {...state};
  }
};

export default productReducer;
