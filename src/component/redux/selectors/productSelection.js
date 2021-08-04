export const getCategoriesState = state => {
  return state.productReducer.categoriesItem;
};
export const getProductState = state => {
  return state.productReducer.productListItem;
};
export const getProductByCategoryState = state => {
  return state.productReducer.productByCategory;
};
export const getProductFavoriteState = state => {
  return state.productReducer.productFavorite;
};
export const getProductInBagState = state => {
  return state.productReducer.orderProduct;
};
