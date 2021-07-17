import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductByCategory} from '../../redux/actions/productAction';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const ProductIcon = props => {
  const dispatch = useDispatch();

  const onPressCategories = id => {
    // dispatch(fetchProductByCategory(id));
  };
  useEffect(() => {
    console.log('props.product', props.product.image);
  }, [props.product]);
  return (
    <View style={styles.imgView}>
      <TouchableOpacity>
        <Image
          source={{uri: props.product.image}}
          style={{width: '100%', height: '100%'}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imgView: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'rgba(178,178,178,0.5)',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
});

export default ProductIcon;
