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
import {
  setProductLiked,
  setUnlikeProduct,
  fetchProductFavorite,
  fetchAllProduct,
} from '../../redux/actions/productAction';

const ProductItem = props => {
  const [liked, setLiked] = useState();
  const {id, image, name, price} = props.product;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    setLiked(props.product.liked);
  }, [props]);

  const onPressGetId = data => {
    navigation.navigate('DetailScreen', {data});
  };

  const onPressLikeProduct = async id => {
    setLiked(!liked);

    if (!liked) {
      await dispatch(setProductLiked(id));
    } else {
      await dispatch(setUnlikeProduct(id));
    }

    dispatch(fetchProductFavorite());
  };

  return (
    <View style={ProductItemStyles.productItem}>
      <View style={ProductItemStyles.productHeader}>
        <TouchableOpacity onPress={() => onPressLikeProduct(id)}>
          <AntIcon name={liked ? 'heart' : 'hearto'} size={30} />
        </TouchableOpacity>
      </View>

      <View style={ProductItemStyles.imgView}>
        <Image source={{uri: image}} style={ProductItemStyles.productImage} />
      </View>
      <View style={ProductItemStyles.nameView}>
        <TouchableOpacity onPress={() => onPressGetId(props.product)}>
          <Text style={ProductItemStyles.productName}>{name}</Text>
        </TouchableOpacity>
      </View>
      <View style={ProductItemStyles.productPrice}>
        <MaterialIcons name="attach-money" size={18} />
        <Text style={ProductItemStyles.productPriceText}>{price}.00</Text>
      </View>
    </View>
  );
};

export default ProductItem;
