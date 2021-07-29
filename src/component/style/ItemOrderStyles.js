import {StyleSheet, Dimensions} from 'react-native';
const {width: screenWidth} = Dimensions.get('window');

const ItemOrderStyles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    borderRadius: 8,
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'rgba(178,178,178,0.5)',
  },
  blockTop: {
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingTop: 10,
  },

  blockContent: {
    flexDirection: 'row',
  },
  image: {
    width: 150,
    height: 150,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  itemDetail: {
    width: '100%',
  },
  productName: {
    width: '55%',
    height: '40%',
  },
  price: {
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  fnt20: {
    fontSize: 20,
  },
  fnt18: {
    fontSize: 18,
  },
  quantityBlock: {
    flexDirection: 'row',
  },
  quantity: {
    paddingHorizontal: 10,
  },
});

export default ItemOrderStyles;
