import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import BackgroundView from '../../component/BackgroundView/index';
import GlobalStyles from '../../style/GlobalStyles';
import {
  removeAccessToken,
  getAccessToken,
  removeEmail,
  removeIsLogin,
  setIsLogin,
} from '../../utils/storage';
import {useNavigation} from '@react-navigation/native';
import SettingScreenStyles from '../../style/SettingScreenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProfile} from '../../redux/actions/productAction';
import {getUserInfo} from '../../redux/selectors/productSelection';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SET_ACCESS_TOKEN} from '../../utils/env';

const Setting = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userInfo = useSelector(getUserInfo);

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  useEffect(() => {
    console.log('userInfo', userInfo);
  }, [userInfo]);

  const onPressLogout = () => {
    removeAccessToken();
    removeEmail();
    dispatch({
      type: SET_ACCESS_TOKEN,
      payload: null,
    });
  };

  return (
    <SafeAreaView style={[GlobalStyles.areaView]}>
      <BackgroundView>
        <View style={SettingScreenStyles.blockTop}>
          <Text style={[SettingScreenStyles.textTitle, GlobalStyles.textWhite]}>
            Setting
          </Text>
        </View>
        <View style={SettingScreenStyles.blockContainer}>
          <View style={SettingScreenStyles.blockUserInfo}>
            <View style={SettingScreenStyles.blockAvatar}>
              <Image
                style={SettingScreenStyles.avatar}
                source={{uri: userInfo.avatar}}
              />
              <View style={SettingScreenStyles.userInfo}>
                <Text
                  style={[
                    SettingScreenStyles.txtName,
                    GlobalStyles.textWhite,
                    GlobalStyles.textBold,
                  ]}>
                  {userInfo.name}
                </Text>
                <Text style={GlobalStyles.textWhite}>{userInfo.email}</Text>
                <Text style={GlobalStyles.textWhite}>{userInfo.phone}</Text>
              </View>
            </View>
          </View>
          <View style={SettingScreenStyles.blockSetting}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ChangePassword')}>
              <View style={SettingScreenStyles.blockTitle}>
                <AntIcon name="idcard" size={30} />
                <View style={SettingScreenStyles.right}>
                  <Text>Change password</Text>
                  <AntIcon name="right" size={20} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={SettingScreenStyles.blockTitle}>
                <AntIcon name="shoppingcart" size={30} />
                <View style={SettingScreenStyles.right}>
                  <Text>Products purchased</Text>
                  <AntIcon name="right" size={20} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressLogout}>
              <View style={SettingScreenStyles.blockTitle}>
                <MaterialIcons name="logout" size={30} />
                <View style={SettingScreenStyles.right}>
                  <Text>Logout</Text>
                  <AntIcon name="right" size={20} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </BackgroundView>
    </SafeAreaView>
  );
};

export default Setting;
