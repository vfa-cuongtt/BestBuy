import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {BackgroundView} from '../../component';
import CategoriesItem from './CategoriesItem';
import ProductItem from './ProductItem';
import {
  fetchAllCategory,
  fetchAllProduct,
  fetchProductByCategory,
  fetchProductFavorite,
} from '../../redux/actions/productAction';
import {
  getCategoriesState,
  getProductByCategoryState,
  getProductState,
  getProductFavoriteState,
} from '../../redux/selectors/productSelection';
import AntIcon from 'react-native-vector-icons/AntDesign';
import ProductIcon from './ProductIcon';
import HomeScreenStyles from '../../style/HomeScreenStyles';
import {useNavigation} from '@react-navigation/native';
import {getAccessToken, removeAccessToken} from '../../utils/storage';
import {setFavoriteData} from '../../../common/common';
import productReducer from '../../redux/reducers/productReducer';

const {width: screenWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('ADIDAS');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const categoriesData = useSelector(getCategoriesState);
  const productListData = useSelector(getProductState);
  const productFavoriteData = useSelector(getProductFavoriteState);

  const [productArr, setProductArr] = useState(productListData);

  useEffect(() => {
    dispatch(fetchAllCategory());
    dispatch(fetchAllProduct()); // =>.lu o store
    dispatch(fetchProductFavorite()); //  =>.lu o store
  }, []);

  useEffect(() => {
    prepareData();
  }, [productFavoriteData]);

  const prepareData = async () => {
    const favorite = productFavoriteData.productsFavorite;

    console.log('Index_productListData', productListData);
    const _productListDataArr = await setFavoriteData(
      favorite,
      productListData,
    );
    console.log('Index_productByCategoryData', _productListDataArr);

    const tempArr = _productListDataArr.filter(item => {
      return (
        item.categories[0].id === activeTab ||
        item.categories[1].id === activeTab ||
        item.categories[2].id === activeTab
      );
    });

    console.log('Index_useEffect_tempArr', tempArr);

    setProductArr(tempArr);
  };

  const onTabPress = id => {
    const tempArr = productListData.filter(item => {
      return (
        item.categories[0].id === id ||
        item.categories[1].id === id ||
        item.categories[2].id === id
      );
    });
    setActiveTab(id);
    const _productArr = setFavoriteData(
      productFavoriteData.productsFavorite,
      tempArr,
    );
    console.log('Index_onTabPress', tempArr);
    setProductArr(_productArr);
  };

  const _renderCategoriesItem = ({item}) => {
    return (
      <CategoriesItem
        categories={item}
        pressCallback={onTabPress}
        activeTab={activeTab}
      />
    );
  };
  const _renderProductByCategoriesItem = ({item}) => {
    return <ProductItem product={item} />;
  };
  const _renderAllProductItem = ({item}) => {
    return (
      <ProductIcon
        product={item}
        favoriteArr={productFavoriteData.productsFavorite}
      />
    );
  };
  const showAll = () => {
    navigation.navigate('ListItem');
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
              data={categoriesData}
              renderItem={_renderCategoriesItem}
            />
          </View>
          <View style={HomeScreenStyles.boxCategoriesList}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              numColumns={1}
              keyExtractor={(item, index) => `${item.name}_${item.index}`}
              data={productArr}
              renderItem={_renderProductByCategoriesItem}
              snapToInterval={screenWidth - 45}
              decelerationRate="fast"
            />
          </View>
        </View>
        <View style={HomeScreenStyles.bottomView}>
          <View style={HomeScreenStyles.bottomBlock}>
            <Text style={HomeScreenStyles.allCategoryText}>All Categories</Text>
            <TouchableOpacity onPress={() => showAll()}>
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
              data={productListData}
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
