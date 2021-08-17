import React, {useEffect} from 'react';
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
import DetailScreenStyles from '../../style/DetailScreenStyles';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {getProductState} from '../../redux/selectors/productSelection';
import ProductItem from './Item';
import ListItemStyles from '../../style/ListItemStyles';

const ListItem = props => {
  const {allItem} = props.route.params;

  const _renderAllProductItem = item => {
    return <ProductItem product={item} />;
  };

  return (
    <SafeAreaView style={[GlobalStyles.areaView]}>
      <BackgroundView>
        <View style={DetailScreenStyles.backView}>
          <View style={DetailScreenStyles.iconBackView}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <IonicIcon name="arrow-back" size={30} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={ListItemStyles.container}>
          <FlatList
            numColumns={2}
            keyExtractor={(item, index) => `${item.name}_${item.index}`}
            data={allItem}
            renderItem={_renderAllProductItem}
          />
        </View>
        <View></View>
      </BackgroundView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   paddingTop: 10,
  // },
});
export default ListItem;
