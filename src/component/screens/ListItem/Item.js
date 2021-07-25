import React, {useEffect} from 'react';
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

const ProductItem = props => {
  const navigation = useNavigation();
  const {image, price, name} = props.product.item;
  useEffect(() => {
    console.log('product_CuongTT_ProductItem', props.product.item);
  }, [props]);

  const onPressGetId = data => {
    console.log('onPressGetId', data);
    navigation.navigate('DetailScreen', {data});
  };

  return (
    <View style={ListItemStyles.productItem}>
      <View style={ListItemStyles.productHeader}>
        <TouchableOpacity>
          <AntIcon name="hearto" size={20} />
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
