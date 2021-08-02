import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import BackgroundView from '../../component/BackgroundView/index';
import GlobalStyles from '../../style/GlobalStyles';
import OrderScreenStyle from '../../style/OrderScreenStyles';
import ItemOrder from './ItemOrder';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {getProductInBagState} from '../../redux/selectors/productSelection';

const OrderScreen = props => {
  const [totalPrice, settotalPrice] = useState(0);
  const productInBag = useSelector(getProductInBagState);
  const [itemInBag, setItemInBag] = useState([]);
  //   const data = [
  //     {
  //       id: 1,
  //       name: 'Adidas Prophere',
  //       image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
  //       price: 350,
  //     },
  //     {
  //       id: 2,
  //       name: 'Adidas Prophere Black White',
  //       image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
  //       price: 350,
  //     },
  //   ];

  useEffect(() => {
    setItemInBag(productInBag);
  }, [props, productInBag]);

  const _renderItem = ({item}) => {
    console.log('OrderScreen_renderItem', item);
    return <ItemOrder product={item} />;
  };
  return (
    <SafeAreaView style={[GlobalStyles.areaView]}>
      <BackgroundView>
        <View style={OrderScreenStyle.blockTop}>
          <Text style={[OrderScreenStyle.textTitle, GlobalStyles.textWhite]}>
            Bag
          </Text>
        </View>
        <View style={OrderScreenStyle.blockContainer}>
          <FlatList
            numColumns={1}
            keyExtractor={item => `${item.id}`}
            data={itemInBag}
            renderItem={_renderItem}
          />
        </View>
        <View style={OrderScreenStyle.blockBottom}>
          <View style={OrderScreenStyle.payTextView}>
            <Text style={[OrderScreenStyle.textSize]}>Total: {totalPrice}</Text>
            <MaterialIcons name="attach-money" size={18} />
          </View>
          <View style={OrderScreenStyle.buttonView}>
            <TouchableOpacity>
              <View style={OrderScreenStyle.button}>
                <Text style={[GlobalStyles.textBold, GlobalStyles.textWhite]}>
                  Pay Now
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </BackgroundView>
    </SafeAreaView>
  );
};

export default OrderScreen;
