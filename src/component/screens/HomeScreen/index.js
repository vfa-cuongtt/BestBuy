import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Dimensions,
  Image,
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

const {width: screenWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const dispatch = useDispatch();
  // const [products, setProduct] = useState();
  // const [categories, setCategories] = useState();
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
    <SafeAreaView style={styles.areaView}>
      <BackgroundView>
        <View style={styles.topView}>
          <Text style={{fontSize: 40, fontWeight: 'bold', color: 'white'}}>
            Athletic Shoes Collection
          </Text>
        </View>
        <View style={styles.contentView}>
          <View style={styles.categoriesList}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              keyExtractor={item => `${item.id}`}
              data={categoriesData.content}
              renderItem={_renderCategoriesItem}
            />
          </View>
          <View style={styles.boxCategoriesList}>
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
        <View style={styles.bottomView}>
          <View style={styles.bottomBlock}>
            <Text style={styles.allCategoryText}>All Categories</Text>
            <TouchableOpacity>
              <Text style={styles.showAllText}>
                Show all <AntIcon name="right" size={15} />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconView}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              numColumns={1}
              keyExtractor={(item, index) => `${item.name}_${item.index}`}
              data={productListData.content}
              renderItem={_renderAllProductItem}
            />
          </View>
        </View>
      </BackgroundView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
  },
  topView: {
    flex: 1 / 3,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  contentView: {
    flex: 1,
    paddingVertical: 10,
  },
  categoriesList: {
    flex: 1 / 10,
    paddingHorizontal: 20,
  },
  boxCategoriesList: {
    flex: 1,
    paddingHorizontal: 10,
  },
  bottomView: {
    flex: 1 / 3,
    paddingHorizontal: 20,
  },
  bottomBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  allCategoryText: {
    fontSize: 20,
  },
  showAllTextL: {
    fontSize: 16,
  },
  iconView: {
    flex: 1,
  },
});
export default HomeScreen;
