import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductByCategory} from '../../redux/actions/productAction';

const CategoriesItem = props => {
  const dispatch = useDispatch();

  const onPressCategories = id => {
    dispatch(fetchProductByCategory(id));
  };
  return (
    <TouchableOpacity onPress={() => onPressCategories(props.categories.id)}>
      <Text style={styles.categoriesText}>{props.categories.id}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoriesText: {
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 10,
    color: 'white',
  },
});

export default CategoriesItem;
