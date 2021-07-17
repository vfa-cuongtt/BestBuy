import React from 'react';
import {View, SafeAreaView, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {BackgroundView} from '../../component';
import GlobalStyles from '../../style/GlobalStyles';

const DetailScreen = ({navigation}) => {
  return (
    <SafeAreaView style={[GlobalStyles.areaView]}>
      <BackgroundView>
        <View>
          <Text>DetailScreen</Text>
        </View>
      </BackgroundView>
    </SafeAreaView>
  );
};

export default DetailScreen;
