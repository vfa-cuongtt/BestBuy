import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import BackgroundView from '../../component/BackgroundView/index';
import GlobalStyles from '../../style/GlobalStyles';
import OrderScreenStyle from '../../style/OrderScreenStyles';
import ItemOrder from './ItemOrder';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {getProductInBagState} from '../../redux/selectors/productSelection';
import {useNavigation} from '@react-navigation/native';
import {fetchOtherProduct} from '../../redux/actions/productAction';
import DetailScreenStyles from '../../style/DetailScreenStyles';

const OrderScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [totalPrice, settotalPrice] = useState(0);
  const productInBag = useSelector(getProductInBagState);
  const [itemInBag, setItemInBag] = useState([]);
  const [rerender, setRerender] = useState(false);
  const [priceArr, setPriceArr] = useState([]);
  const [isDisplay, setIsDisplay] = useState(false);

  const tempArr = [];

  useEffect(() => {
    navigation.addListener('focus', () => {
      setItemInBag(productInBag);
      setRerender(!rerender);
    });
  }, [navigation, productInBag, rerender]);

  const setTotalPrice = (price, id, productQuantity) => {
    console.log('total price', id, price, productQuantity);

    itemInBag.forEach(item => {
      if (item.productId === id) {
        item.quantity = productQuantity;
      }
    });

    tempArr.push(price);
    // setPriceArr(price);
    console.log('temp', tempArr);

    settotalPrice(price);
  };

  const _renderItem = ({item}) => {
    return (
      <ItemOrder
        product={item}
        totalPrice={(price, id, productQuantity) =>
          setTotalPrice(price, id, productQuantity)
        }
        deleteItem={id => deleteItem(id)}
      />
    );
  };

  const deleteItem = id => {
    const index = productInBag.findIndex(item => item.productId === id);
    productInBag.splice(index, 1);
    settotalPrice(0);
    setRerender(!rerender);
  };

  const payProduct = () => {
    // console.log('payProduct', itemInBag);
    dispatch(fetchOtherProduct(itemInBag));
    setItemInBag([]);
    setRerender(!rerender);
    setIsDisplay(true);
  };

  const closeModal = () => {
    setIsDisplay(!isDisplay);
  };

  // console.log('Test Return', itemInBag);
  return (
    <SafeAreaView style={[GlobalStyles.areaView]}>
      <BackgroundView>
        <Modal
          isVisible={isDisplay}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={800}
          backdropTransitionOutTiming={800}
          onBackdropPress={closeModal}>
          <View style={DetailScreenStyles.modal}>
            <View style={DetailScreenStyles.modalContainer}>
              <Text style={[GlobalStyles.fn20, GlobalStyles.textBold]}>
                Buy product success
              </Text>
            </View>

            <View style={DetailScreenStyles.modalButton}>
              <TouchableOpacity onPress={closeModal}>
                <View style={DetailScreenStyles.button}>
                  <Text
                    style={[
                      DetailScreenStyles.textSize,
                      GlobalStyles.textWhite,
                    ]}>
                    OK
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={OrderScreenStyle.blockTop}>
          <Text style={[OrderScreenStyle.textTitle, GlobalStyles.textWhite]}>
            Bag
          </Text>
        </View>
        <View style={OrderScreenStyle.blockContainer}>
          <FlatList
            numColumns={1}
            keyExtractor={item => `${item.productId}`}
            data={itemInBag}
            renderItem={_renderItem}
            extraData={rerender}
          />
        </View>
        <View style={OrderScreenStyle.blockBottom}>
          <View style={OrderScreenStyle.payTextView}>
            {/* <Text style={[OrderScreenStyle.textSize]}>Total: {totalPrice}</Text>
            <MaterialIcons name="attach-money" size={18} /> */}
          </View>
          <View style={OrderScreenStyle.buttonView}>
            <TouchableOpacity onPress={payProduct}>
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
