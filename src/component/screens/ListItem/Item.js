import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ListItemStyles from '../../style/ListItemStyles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  setProductLiked,
  setUnlikeProduct,
  fetchProductFavorite,
} from '../../redux/actions/productAction';

const ProductItem = props => {
  const {image, price, name, liked, id} = props.product.item;
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(liked);

  const navigation = useNavigation();

  const onPressGetId = data => {
    navigation.navigate('DetailScreen', {data});
  };

  const onPressLikeProduct = async id => {
    if (isLiked) {
      await dispatch(setUnlikeProduct(id));
    } else {
      await dispatch(setProductLiked(id));
    }
    dispatch(fetchProductFavorite());
    setIsLiked(!isLiked);
  };

  return (
    <View style={ListItemStyles.productItem}>
      <View style={ListItemStyles.productHeader}>
        <TouchableOpacity onPress={() => onPressLikeProduct(id)}>
          <AntIcon name={isLiked ? 'heart' : 'hearto'} size={20} />
        </TouchableOpacity>
      </View>

      <View style={ListItemStyles.imgView}>
        <Image source={{uri: image}} style={ListItemStyles.productImage} />
      </View>
      <View style={ListItemStyles.nameView}>
        <TouchableOpacity onPress={() => onPressGetId(props.product.item)}>
          <Text style={ListItemStyles.productName}>{name}</Text>
        </TouchableOpacity>
      </View>
      <View style={ListItemStyles.productPrice}>
        <MaterialIcons name="attach-money" size={18} />
        <Text style={ListItemStyles.productPriceText}>{price}.00</Text>
      </View>
    </View>
  );
};

export default ProductItem;
