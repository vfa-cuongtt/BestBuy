export const setFavoriteData = (favoriteArr, productArr) => {
  if (favoriteArr) {
    productArr.forEach((item, i) => {
      let favoriteId = favoriteArr.find(el => el.id === item.id);
      if (favoriteId) {
        productArr[i].liked = true;
      } else {
        productArr[i].liked = false;
      }
    });
  }
  return [...productArr];
};
