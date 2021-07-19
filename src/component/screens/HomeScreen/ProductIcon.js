import React, {useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductByCategory} from '../../redux/actions/productAction';
import ProductIconStyles from '../../style/ProductIconStyles';
import {useNavigation} from '@react-navigation/native';

const ProductIcon = props => {
  const {image, id} = props.product;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onPressCategories = data => {
    console.log('onPressCategories', data);
    // dispatch(fetchProductByCategory(id));
    navigation.navigate('DetailScreen', {data});
  };

  useEffect(() => {
    // console.log('props__product', props.product);
  }, [props]);

  return (
    <View style={ProductIconStyles.imgView}>
      <TouchableOpacity onPress={() => onPressCategories(props.product)}>
        <Image source={{uri: image}} style={ProductIconStyles.productImage} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductIcon;
