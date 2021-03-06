import React, {useEffect} from 'react';
import loginStyles from '../../style/LoginStyle';
import {
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {userLogin} from '../../api/userLoginApi';
import {setAccessToken, getAccessToken} from '../../utils/storage';
import {LoginButton} from 'react-native-fbsdk-next';
import {useDispatch} from 'react-redux';
import {logo} from '../../../assets';
import {Text} from '../../component';
import {NavigationContainer} from '@react-navigation/native';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

// const setAccessToken = async value => {
//   try {
//     await AsyncStorage.setItem('@accessToken', value);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const getAccessToken = async () => {
//   try {
//     const accessToken = await AsyncStorage.getItem('@accessToken');
//     console.log('accessToken', accessToken);
//     return accessToken;
//   } catch (err) {
//     console.log(err);
//   }
// };

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const handleLogin = value => {
    const data = {...value};
    userLogin(data)
      .then(res => {
        if (res.data.statusCode === 200) {
          // console.log('LoginScreen', res.data.content.accessToken);
          setAccessToken(res.data.content.accessToken);
          dispatch({
            type: 'SET_ACCESS_TOKEN',
            payload: res.data.content.accessToken,
          });
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <SafeAreaView style={loginStyles.areaView}>
      <View style={loginStyles.logoView}>
        <Image source={logo} style={loginStyles.logo} resizeMode="stretch" />
      </View>
      <View style={loginStyles.loginForm}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={handleLogin}
          validationSchema={loginSchema}>
          {({values, handleChange, handleSubmit, errors}) => (
            <>
              <View style={loginStyles.inputContainer}>
                <TextInput
                  style={loginStyles.textInput}
                  placeholder="example@gmail.com"
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                {errors.email && (
                  <Text style={loginStyles.textError}>{errors.email}</Text>
                )}
              </View>

              <View style={loginStyles.inputContainer}>
                <TextInput
                  style={loginStyles.textInput}
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                />
                {errors.password && (
                  <Text style={loginStyles.textError}>{errors.password}</Text>
                )}
              </View>

              <View style={loginStyles.buttonView}>
                <View>
                  <TouchableOpacity
                    style={loginStyles.btnSignIn}
                    onPress={handleSubmit}>
                    <Text style={loginStyles.loginText}>LOGIN</Text>
                  </TouchableOpacity>
                </View>
                <View style={loginStyles.btnSignUp}>
                  <Text>
                    Don't have an account?{'  '}
                    <TouchableOpacity
                      onPress={() => navigation.navigate('SignupScreen')}>
                      <Text style={{fontSize: 15, fontWeight: '800'}}>
                        Sign Up
                      </Text>
                    </TouchableOpacity>
                  </Text>
                </View>
              </View>
            </>
          )}
        </Formik>
      </View>
      <View style={loginStyles.bottomView}></View>
    </SafeAreaView>
  );
};

export default LoginScreen;
