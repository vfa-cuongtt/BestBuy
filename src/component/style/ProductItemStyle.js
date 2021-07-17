import {StyleSheet, Dimensions} from 'react-native';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const ProductItemStyles = StyleSheet.create({
  productItem: {
    width: screenWidth - 60,
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 8,
    marginHorizontal: 7,
    paddingTop: 5,
    borderWidth: 1,
    borderColor: 'rgba(178,178,178,0.5)',
  },
  productHeader: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  imgView: {
    width: '100%',
    height: '70%',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  nameView: {
    width: '100%',
    height: '10%',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productPriceText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProductItemStyles;
