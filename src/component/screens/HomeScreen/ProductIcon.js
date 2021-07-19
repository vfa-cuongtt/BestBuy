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

const ProductIcon = props => {
  const dispatch = useDispatch();

  const onPressCategories = id => {
    // dispatch(fetchProductByCategory(id));
  };

  return (
    <View style={ProductIconStyles.imgView}>
      <TouchableOpacity>
        <Image
          source={{uri: props.product.image}}
          style={ProductIconStyles.productImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProductIcon;
