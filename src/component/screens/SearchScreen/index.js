import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import BackgroundView from '../../component/BackgroundView/index';
import GlobalStyles from '../../style/GlobalStyles';

const Search = () => {
  return (
    <SafeAreaView style={[GlobalStyles.areaView]}>
      <BackgroundView>
        <Text>Search</Text>
      </BackgroundView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default Search;
