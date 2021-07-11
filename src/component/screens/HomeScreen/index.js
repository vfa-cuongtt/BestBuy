import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  FlatList,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {BackgroundView} from '../../component';
import {getAllCategory} from '../../api/productApi';
import CategoriesItem from './CategoriesItem';
import ProductItem from './ProductItem';
import {fetchAllCategory} from '../../redux/actions/productAction';
import {getCategoriesState} from '../../redux/selectors/productSelection';

const HomeScreen = () => {
  const dispatch = useDispatch();
  // const [products, setProduct] = useState();
  // const [categories, setCategories] = useState();
  const categoriesData = useSelector(getCategoriesState);
  // const productData = useSelector(getCategoriesState);

  useEffect(() => {
    console.log(categoriesData);
  }, [categoriesData]);

  useEffect(() => {
    dispatch(fetchAllCategory());
  }, []);

  const _renderCategoriesItem = ({item}) => {
    return <CategoriesItem categories={item} />;
  };
  const _renderItem = ({item}) => {
    return <ProductItem product={item} />;
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
          {/* <View style={styles.boxCategoriesList}>
            <FlatList
                numColumns={2}
                keyExtractor={(item, index) => `${item.name}_${item.index}`}
                data={products}
                renderItem={_renderItem}
              />
          </View> */}
        </View>
        <View style={styles.bottomView}></View>
      </BackgroundView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
  },
  topView: {
    flex: 1 / 5,
    // backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  contentView: {
    flex: 1,
    backgroundColor: 'green',
    paddingVertical: 10,
  },
  categoriesList: {
    flex: 1 / 10,
    paddingHorizontal: 20,
  },
  boxCategoriesList: {
    flex: 1,
    backgroundColor: 'red',
  },
  bottomView: {
    flex: 1 / 5,
    backgroundColor: 'blue',
  },
});
export default HomeScreen;
