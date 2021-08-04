import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import BackgroundView from '../../component/BackgroundView/index';
import GlobalStyles from '../../style/GlobalStyles';
import ItemOrderStyles from '../../style/ItemOrderStyles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ItemOrder = props => {
  console.log('ItemOrder__', props.product);
  const {productId, name, image, price, quantity} = props.product;
  const [productQuantity, setProductQuantity] = useState(quantity);
  const [productPrice, setProductPrice] = useState(price);

  useEffect(() => {
    // console.log('props.product', props.product);
    if (quantity > 1) {
      setProductPrice(price * 2);
    }
  }, [quantity, price]);

  useEffect(() => {
    props.totalPrice(productPrice, productId, productQuantity);
  }, [productPrice, productId, productQuantity]);

  const onMinus = () => {
    const minus = productQuantity - 1;
    const advancePrice = productPrice;

    if (minus >= 1) {
      setProductQuantity(minus);
    }
    if (minus === 1) {
      setProductPrice(price);
    } else if (minus >= 2) {
      setProductPrice(advancePrice - price);
    }
  };

  const onPlus = () => {
    setProductQuantity(productQuantity + 1);
    setProductPrice(productPrice + price);
  };

  return (
    <View style={ItemOrderStyles.item}>
      <View style={ItemOrderStyles.blockTop}>
        <TouchableOpacity>
          <AntIcon name="close" size={20} />
        </TouchableOpacity>
      </View>
      <View style={ItemOrderStyles.blockContent}>
        <View style={ItemOrderStyles.image}>
          <Image source={{uri: image}} style={ItemOrderStyles.productImage} />
        </View>
        <View style={ItemOrderStyles.itemDetail}>
          <View style={[ItemOrderStyles.productName, GlobalStyles.textBold]}>
            <Text style={ItemOrderStyles.fnt20}>{name}</Text>
          </View>
          <View style={ItemOrderStyles.price}>
            <MaterialIcons name="attach-money" size={18} />
            <Text style={ItemOrderStyles.fnt18}>{productPrice}.00</Text>
          </View>
          <View style={ItemOrderStyles.quantityBlock}>
            <TouchableOpacity onPress={onMinus}>
              <AntIcon name="minuscircleo" size={20} />
            </TouchableOpacity>
            <View style={ItemOrderStyles.quantity}>
              <Text style={ItemOrderStyles.fnt18}>{productQuantity}</Text>
            </View>

            <TouchableOpacity onPress={onPlus}>
              <AntIcon name="pluscircle" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemOrder;
