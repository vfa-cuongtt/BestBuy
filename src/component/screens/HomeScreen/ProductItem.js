import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  getProductByCategoryState,
  getProductFavoriteState,
} from '../../redux/selectors/productSelection';
import ProductItemStyles from '../../style/ProductItemStyle';
import {useNavigation} from '@react-navigation/native';

const ProductItem = props => {
  const navigation = useNavigation();
  const productByCategoryData = useSelector(getProductByCategoryState);

  useEffect(() => {
    // console.log('product_CuongTT', props.product);
    // console.log('productFavoriteData', productFavoriteData);
  }, [props]);

  const onPressGetId = data => {
    console.log('onPressGetId', data);
    navigation.navigate('DetailScreen', {data});
  };

  const onPressLikeProduct = id => {
    console.log('product_ID', id);
  };

  return (
    <View style={ProductItemStyles.productItem}>
      <View style={ProductItemStyles.productHeader}>
        <TouchableOpacity onPress={() => onPressLikeProduct(props.product.id)}>
          <AntIcon name="hearto" size={30} />
        </TouchableOpacity>
      </View>

      <View style={ProductItemStyles.imgView}>
        <Image
          source={{uri: props.product.image}}
          style={ProductItemStyles.productImage}
        />
      </View>
      <View style={ProductItemStyles.nameView}>
        <TouchableOpacity onPress={() => onPressGetId(props.product)}>
          <Text style={ProductItemStyles.productName}>
            {props.product.name}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={ProductItemStyles.productPrice}>
        <MaterialIcons name="attach-money" size={18} />
        <Text style={ProductItemStyles.productPriceText}>
          {props.product.price}.00
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;
