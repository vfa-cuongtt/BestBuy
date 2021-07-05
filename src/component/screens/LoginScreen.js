import React, {useEffect} from 'react';
import loginStyles from '../style/LoginStyle';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {userLogin} from '../api/userLoginApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const setAccessToken = async value => {
  try {
    await AsyncStorage.setItem('@accessToken', value);
  } catch (err) {
    console.log(err);
  }
};

const getAccessToken = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('@accessToken');
    console.log('accessToken', accessToken);
    return accessToken;
  } catch (err) {
    console.log(err);
  }
};

const LoginScreen = () => {
  const handleLogin = value => {
    const data = {...value};
    userLogin(data)
      .then(res => {
        if (res.data.statusCode === 200) {
          console.log('LoginScreen', res.data.content.accessToken);
          setAccessToken(res.data.content.accessToken);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <SafeAreaView style={loginStyles.areaView}>
      <View style={loginStyles.loginForm}>
        <Text>Login </Text>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={handleLogin}
          validationSchema={loginSchema}>
          {({values, handleChange, handleSubmit, errors}) => (
            <>
              <View style={loginStyles.inputContainer}>
                <Text>Email</Text>
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
                <Text>Password</Text>
                <TextInput
                  style={loginStyles.textInput}
                  placeholder="********"
                  value={values.password}
                  onChangeText={handleChange('password')}
                />
                {errors.password && (
                  <Text style={loginStyles.textError}>{errors.password}</Text>
                )}
              </View>

              <View style={loginStyles.buttonView}>
                <TouchableOpacity
                  style={loginStyles.btnSignIn}
                  onPress={handleSubmit}>
                  <Text>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={loginStyles.btnSignUp}>
                  <Text>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
        <TouchableOpacity
          style={loginStyles.btnSignUp}
          onPress={async () => await getAccessToken()}>
          <Text>get Accesstoken</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
