import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductByCategory} from '../../redux/actions/productAction';
import CategoriesItemStyles from '../../style/CategoriesItemStyles';

const CategoriesItem = props => {
  const dispatch = useDispatch();

  const onPressCategories = id => {
    dispatch(fetchProductByCategory(id));
  };
  return (
    <TouchableOpacity onPress={() => onPressCategories(props.categories.id)}>
      <Text style={CategoriesItemStyles.categoriesText}>
        {props.categories.id}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoriesItem;
