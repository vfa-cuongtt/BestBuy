import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import BackgroundView from '../../../component/BackgroundView/index';
import GlobalStyles from '../../../style/GlobalStyles';
import {
  removeAccessToken,
  getAccessToken,
  removeEmail,
  removeIsLogin,
} from '../../utils/storage';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {resetPassword} from '../../../redux/actions/productAction';
import {getUserInfo} from '../../../redux/selectors/productSelection';
import AntIcon from 'react-native-vector-icons/AntDesign';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DetailScreenStyles from '../../../style/DetailScreenStyles';
import ChangePasswordStyles from '../../../style/ChangePasswordStyles';
import Modal from 'react-native-modal';

const ChangePassword = props => {
  const dispatch = useDispatch();
  const [isDisplay, setIsDisplay] = useState(false);

  const resetPassSchema = Yup.object().shape({
    newPassword: Yup.string()
      .min(4, 'Password too short!')
      .max(16, 'Password too long!')
      .required('Password is required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Password is required'),
  });

  const handleResetPassword = value => {
    dispatch(resetPassword(value.newPassword));
    setIsDisplay(true);
  };

  const closeModal = () => {
    setIsDisplay(!isDisplay);
  };

  return (
    <SafeAreaView style={[GlobalStyles.areaView]}>
      <BackgroundView>
        <Modal
          isVisible={isDisplay}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={800}
          backdropTransitionOutTiming={800}
          onBackdropPress={closeModal}>
          <View style={ChangePasswordStyles.modal}>
            <View style={ChangePasswordStyles.modalContainer}>
              <Text
                style={[
                  GlobalStyles.fn17,
                  GlobalStyles.textBold,
                  ChangePasswordStyles.txtTitleSuccess,
                ]}>
                Reset Password
              </Text>
              <Text style={[GlobalStyles.textBold]}>
                Your password has been reset successfully
              </Text>
            </View>

            <View style={ChangePasswordStyles.modalButton}>
              <TouchableOpacity onPress={closeModal}>
                <View style={ChangePasswordStyles.button}>
                  <Text
                    style={[
                      ChangePasswordStyles.textSize,
                      GlobalStyles.textWhite,
                    ]}>
                    OK
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={ChangePasswordStyles.blockTop}>
          <View style={DetailScreenStyles.iconBackView}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <IonicIcon name="arrow-back" size={30} color={'#fff'} />
            </TouchableOpacity>
          </View>

          <View style={ChangePasswordStyles.titleView}>
            <Text
              style={[ChangePasswordStyles.textTitle, GlobalStyles.textWhite]}>
              Reset Password
            </Text>
          </View>
        </View>

        <View style={ChangePasswordStyles.blockContainer}>
          <View style={ChangePasswordStyles.blockUserInfo}>
            <Formik
              initialValues={{newPassword: '', passwordConfirm: ''}}
              onSubmit={handleResetPassword}
              validationSchema={resetPassSchema}>
              {({values, handleChange, handleSubmit, errors}) => (
                <>
                  <View style={ChangePasswordStyles.password}>
                    <Text>Password</Text>
                    <TextInput
                      style={ChangePasswordStyles.textInput}
                      placeholder="********"
                      value={values.newPassword}
                      autoCapitalize="none"
                      onChangeText={handleChange('newPassword')}
                      secureTextEntry={true}
                    />
                    {errors.newPassword && (
                      <Text style={ChangePasswordStyles.textError}>
                        {errors.newPassword}
                      </Text>
                    )}
                  </View>
                  <View style={ChangePasswordStyles.passwordConfirm}>
                    <Text>Password Confirm</Text>
                    <TextInput
                      style={ChangePasswordStyles.textInput}
                      placeholder="********"
                      value={values.passwordConfirm}
                      autoCapitalize="none"
                      onChangeText={handleChange('passwordConfirm')}
                      secureTextEntry={true}
                    />
                    {errors.passwordConfirm && (
                      <Text style={ChangePasswordStyles.textError}>
                        {errors.passwordConfirm}
                      </Text>
                    )}
                  </View>
                  <View style={ChangePasswordStyles.blockButton}>
                    <TouchableOpacity onPress={handleSubmit}>
                      <View style={DetailScreenStyles.button}>
                        <Text
                          style={[
                            DetailScreenStyles.textSize,
                            GlobalStyles.textWhite,
                          ]}>
                          Update Password
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </View>
      </BackgroundView>
    </SafeAreaView>
  );
};

export default ChangePassword;
