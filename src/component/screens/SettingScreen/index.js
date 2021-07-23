import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import BackgroundView from '../../component/BackgroundView/index';
import GlobalStyles from '../../style/GlobalStyles';
import {
  removeAccessToken,
  getAccessToken,
  removeEmail,
  removeIsLogin,
} from '../../utils/storage';
import {useNavigation} from '@react-navigation/native';

const Setting = () => {
  const navigation = useNavigation();

  const onPressLogout = () => {
    removeAccessToken();
    removeEmail();
    removeIsLogin();
    console.log('accessToken', getAccessToken());
    navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView style={[GlobalStyles.areaView]}>
      <BackgroundView>
        <View style={styles.blockTop}>
          <Text>Setting</Text>
        </View>
        <View style={styles.blockContent}>
          <TouchableOpacity onPress={() => onPressLogout()}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blockBottom}></View>
      </BackgroundView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  blockTop: {
    height: '10%',
    backgroundColor: 'green',
  },
  blockContent: {
    height: '90%',
    backgroundColor: 'red',
  },
  blockBottom: {
    backgroundColor: 'blue',
  },
});
export default Setting;
