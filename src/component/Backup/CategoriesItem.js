import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default class CategoriesItem extends Component {
  onPressCategories = id => {
    console.log('onPressCategories', id);
  };

  render() {
    // console.log('this.props.categories', this.props.categories)
    return (
      <TouchableOpacity
        onPress={() => {
          this.onPressCategories(this.props.categories.id);
        }}>
        <Text style={styles.categoriesText}>{this.props.categories.id}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  categoriesText: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 10,
  },
});
