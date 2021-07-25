export const setFavoriteData = (favoriteArr, productArr) => {
  let arr = [...productArr];
  if (favoriteArr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < favoriteArr.length; j++) {
        if (arr[i].id === favoriteArr[j].id) {
          console.log('CuongTT___LIKED___', favoriteArr[j].id);
          arr[i].liked = true;
        }
      }
    }
  }
  return arr;
};
