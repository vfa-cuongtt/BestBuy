import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductByCategory} from '../../redux/actions/productAction';
import CategoriesItemStyles from '../../style/CategoriesItemStyles';

const CategoriesItem = props => {
  const dispatch = useDispatch();

  const onPressCategories = id => {
    props.pressCallback(id);
  };

  return (
    <TouchableOpacity onPress={() => onPressCategories(props.categories.id)}>
      <Text
        style={[
          CategoriesItemStyles.categoriesText,
          props.activeTab === props.categories.id && styles.active,
        ]}>
        {props.categories.id}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  active: {
    color: 'white',
  },
});

export default CategoriesItem;
