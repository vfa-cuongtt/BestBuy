import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingScreen from '../screens/SettingScreen';
import SearchScreen from '../screens/SearchScreen';
import HomeScreen from '../screens/HomeScreen';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import RootTabStyles from '../style/RootTabStyles';

const Tab = createBottomTabNavigator();

const RootTab = () => {
  const tabBarOptions = {
    showLabel: false,
    style: {
      backgroundColor: 'black',
      borderWidth: 0,
      borderRadius: 8,
      marginHorizontal: 10,
      marginVertical: 5,
    },
  };

  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused, color}) => {
      let iconName;
      const backgroundColor = 'black';
      const fontSize = focused ? 30 : 20;

      switch (route.name) {
        case 'HomeScreen':
          iconName = 'home';
          break;
        case 'SettingScreen':
          iconName = 'dots-three-vertical';
          break;
        default:
          break;
      }

      return (
        <View
          style={[
            RootTabStyles.tabBarIconContent,
            {backgroundColor},
            focused && RootTabStyles.active,
          ]}>
          <EntypoIcon name={iconName} size={fontSize} color="white" />
        </View>
      );
    },
  });

  return (
    <Tab.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SettingScreen" component={SettingScreen} />
    </Tab.Navigator>
  );
};
export default RootTab;
