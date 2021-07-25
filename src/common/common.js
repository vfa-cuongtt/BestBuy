export const setFavoriteData = (favoriteArr, productArr) => {
  console.log('COMMON_favoriteArr', favoriteArr);
  if (favoriteArr) {
    productArr.forEach((item, i) => {
      let favoriteId = favoriteArr.find(el => el.id === item.id);
      console.log('COMMON_favoriteId', favoriteId);
      console.log('COMMON_i', i);
      if (favoriteId) {
        productArr[i].liked = true;
      } else {
        productArr[i].liked = false;
      }
    });
  }
  return [...productArr];
};
