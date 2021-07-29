import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import BackgroundView from '../../component/BackgroundView/index';
import GlobalStyles from '../../style/GlobalStyles';
import ItemOrderStyles from '../../style/ItemOrderStyles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ItemOrder = props => {
  console.log('ItemOrder__', props.product);
  const {id, name, image, price} = props.product;
  const [quantity, setQuantity] = useState(0);

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
            <Text style={ItemOrderStyles.fnt18}>{price}.00</Text>
          </View>
          <View style={ItemOrderStyles.quantityBlock}>
            <TouchableOpacity>
              <AntIcon name="minuscircleo" size={20} />
            </TouchableOpacity>
            <View style={ItemOrderStyles.quantity}>
              <Text style={ItemOrderStyles.fnt18}>{quantity}</Text>
            </View>

            <TouchableOpacity>
              <AntIcon name="pluscircle" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemOrder;
