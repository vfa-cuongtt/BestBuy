import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {BackgroundView} from '../../component';
import CategoriesItem from './CategoriesItem';
import ProductItem from './ProductItem';
import {
  fetchAllCategory,
  fetchAllProduct,
  fetchProductByCategory,
} from '../../redux/actions/productAction';
import {
  getCategoriesState,
  getProductByCategoryState,
  getProductState,
} from '../../redux/selectors/productSelection';
import AntIcon from 'react-native-vector-icons/AntDesign';
import ProductIcon from './ProductIcon';
import HomeScreenStyles from '../../style/HomeScreenStyles';

const {width: screenWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const dispatch = useDispatch();
  const categoriesData = useSelector(getCategoriesState);
  const productByCategoryData = useSelector(getProductByCategoryState);
  const productListData = useSelector(getProductState);

  useEffect(() => {
    dispatch(fetchAllCategory());
    dispatch(fetchProductByCategory('ADIDAS'));
    dispatch(fetchAllProduct());
  }, []);

  const _renderCategoriesItem = ({item}) => {
    return <CategoriesItem categories={item} />;
  };
  const _renderProductByCategoriesItem = ({item}) => {
    return <ProductItem product={item} />;
  };
  const _renderAllProductItem = ({item}) => {
    return <ProductIcon product={item} />;
  };
  return (
    <SafeAreaView style={HomeScreenStyles.areaView}>
      <BackgroundView>
        <View style={HomeScreenStyles.topView}>
          <Text style={{fontSize: 40, fontWeight: 'bold', color: 'white'}}>
            Athletic Shoes Collection
          </Text>
        </View>
        <View style={HomeScreenStyles.contentView}>
          <View style={HomeScreenStyles.categoriesList}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              keyExtractor={item => `${item.id}`}
              data={categoriesData.content}
              renderItem={_renderCategoriesItem}
            />
          </View>
          <View style={HomeScreenStyles.boxCategoriesList}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              numColumns={1}
              keyExtractor={(item, index) => `${item.name}_${item.index}`}
              data={productByCategoryData}
              renderItem={_renderProductByCategoriesItem}
              snapToInterval={screenWidth - 45}
              decelerationRate="fast"
            />
          </View>
        </View>
        <View style={HomeScreenStyles.bottomView}>
          <View style={HomeScreenStyles.bottomBlock}>
            <Text style={HomeScreenStyles.allCategoryText}>All Categories</Text>
            <TouchableOpacity>
              <Text style={HomeScreenStyles.showAllText}>
                Show all <AntIcon name="right" size={15} />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={HomeScreenStyles.iconView}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              numColumns={1}
              keyExtractor={(item, index) => `${item.name}_${item.index}`}
              data={productListData.content}
              renderItem={_renderAllProductItem}
              snapToInterval={110}
              decelerationRate="fast"
            />
          </View>
        </View>
      </BackgroundView>
    </SafeAreaView>
  );
};

export default HomeScreen;
