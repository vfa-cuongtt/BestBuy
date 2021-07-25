import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductByCategory} from '../../redux/actions/productAction';
import CategoriesItemStyles from '../../style/CategoriesItemStyles';

const CategoriesItem = props => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const onPressCategories = id => {
    dispatch(fetchProductByCategory(id));
    setActive(!active);
  };

  return (
    <TouchableOpacity onPress={() => onPressCategories(props.categories.id)}>
      <Text
        style={[CategoriesItemStyles.categoriesText, active && styles.active]}>
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
