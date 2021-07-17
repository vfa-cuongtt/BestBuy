import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {getProductByCategoryState} from '../../redux/selectors/productSelection';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const ProductItem = props => {
  const productByCategoryData = useSelector(getProductByCategoryState);
  useEffect(() => {
    console.log('product_CuongTT', props);
  }, [props]);

  const onPressGetId = id => {
    console.log('onPressGetId', id);
  };

  return (
    <View style={styles.productItem}>
      <View style={styles.productHeader}>
        <TouchableOpacity>
          <AntIcon name="heart" color="red" size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.imgView}>
        <Image
          source={{uri: props.product.image}}
          style={styles.productImage}
        />
      </View>
      <View style={styles.nameView}>
        <TouchableOpacity onPress={() => onPressGetId(props.product.id)}>
          <Text style={styles.productName}>{props.product.name}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productPrice}>
        <MaterialIcons name="attach-money" size={18} />
        <Text style={styles.productPriceText}>{props.product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    width: screenWidth - 60,
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 8,
    marginHorizontal: 7,
    paddingTop: 20,
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
    height: '60%',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  nameView: {
    width: '100%',
    height: '15%',
  },
  productName: {
    fontSize: 25,
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
export default ProductItem;
