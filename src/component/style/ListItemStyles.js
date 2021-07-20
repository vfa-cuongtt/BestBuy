import {StyleSheet, Dimensions} from 'react-native';
const {width: screenWidth} = Dimensions.get('window');
const ListItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  productItem: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: (screenWidth - 40) / 2,
    height: 200,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginHorizontal: 10,
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
    height: '55%',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  nameView: {
    width: '100%',
    height: '20%',
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  productPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productPriceText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default ListItemStyles;
