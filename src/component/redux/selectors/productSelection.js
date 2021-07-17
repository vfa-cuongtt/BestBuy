export const getCategoriesState = state => {
  return state.productReducer.categoriesItem;
};
export const getProductState = state => {
  return state.productReducer.productListItem;
};
export const getProductByCategoryState = state => {
  return state.productReducer.productByCategory;
};
