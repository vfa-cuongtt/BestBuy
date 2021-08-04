import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
} from 'react-native';
import {BackgroundView} from '../../component';
import GlobalStyles from '../../style/GlobalStyles';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import DetailScreenStyles from '../../style/DetailScreenStyles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  setProductLiked,
  setUnlikeProduct,
  fetchProductFavorite,
  setProductToBag,
} from '../../redux/actions/productAction';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';

const DetailScreen = props => {
  const dispatch = useDispatch();
  const {data, title, size} = props.route.params;
  const [liked, setLiked] = useState(data.liked);
  const [productSize, setProductSize] = useState();
  const [isDisplay, seIsDisplay] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    console.log('DataDetail', data);
  }, [props]);

  const onPressLikeProduct = async (id, islike) => {
    console.log('product_ID', id, islike);
    if (islike) {
      console.log('unlike');
      await dispatch(setUnlikeProduct(id));
    } else {
      console.log('like');
      await dispatch(setProductLiked(id));
    }
    dispatch(fetchProductFavorite());
    setLiked(!islike);
  };

  const onPressGetSize = item => {
    setProductSize(item);
  };

  const addProductToBag = item => {
    // navigation.navigate('OrderScreen', item);
    dispatch(setProductToBag(item));
    seIsDisplay(true);
  };

  const closeModal = () => {
    seIsDisplay(!isDisplay);
  };

  const _renderSize = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPressGetSize(item);
        }}>
        <View
          style={[
            DetailScreenStyles.size,
            productSize === item && DetailScreenStyles.active,
          ]}>
          <Text style={productSize === item && GlobalStyles.textWhite}>
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

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
                The product has been added to the bag
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

        <View style={DetailScreenStyles.backView}>
          <View style={DetailScreenStyles.iconBackView}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <IonicIcon name="arrow-back" size={30} color={'#fff'} />
            </TouchableOpacity>
          </View>

          <View style={DetailScreenStyles.titleView}>
            <Text
              style={[DetailScreenStyles.textTitle, GlobalStyles.textWhite]}>
              {data.categories[0].id}
            </Text>
          </View>
        </View>
        <View style={DetailScreenStyles.blockContent}>
          <View style={DetailScreenStyles.blockImg}>
            <View style={DetailScreenStyles.iconLike}>
              <TouchableOpacity
                onPress={() => onPressLikeProduct(data.id, data.liked)}>
                <AntIcon name={liked ? 'heart' : 'hearto'} size={30} />
              </TouchableOpacity>
            </View>
            <View style={DetailScreenStyles.viewImg}>
              <Image
                source={{uri: data.image}}
                style={DetailScreenStyles.productImage}
              />
            </View>
          </View>
          <View style={DetailScreenStyles.blockDetail}>
            <View style={DetailScreenStyles.blockName}>
              <Text style={DetailScreenStyles.textTitle}>{data.name}</Text>
            </View>
            <View style={DetailScreenStyles.blockPrice}>
              <MaterialIcons name="attach-money" size={25} />
              <Text style={DetailScreenStyles.textPrice}>{data.price}.00</Text>
            </View>
            <View style={DetailScreenStyles.blockSize}>
              <Text style={DetailScreenStyles.textSize}>Select a size</Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                keyExtractor={index => `${index}`}
                data={data.size}
                renderItem={_renderSize}
              />
            </View>
            <View style={DetailScreenStyles.blockDescription}>
              <Text style={DetailScreenStyles.textSize}>
                {data.shortDescription}
              </Text>
              <Text>{data.description}</Text>
            </View>
          </View>
        </View>

        <View style={DetailScreenStyles.blockButton}>
          <TouchableOpacity
            onPress={() => {
              addProductToBag(data);
            }}>
            <View style={DetailScreenStyles.button}>
              <Text
                style={[DetailScreenStyles.textSize, GlobalStyles.textWhite]}>
                Add to bag
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </BackgroundView>
    </SafeAreaView>
  );
};

export default DetailScreen;
