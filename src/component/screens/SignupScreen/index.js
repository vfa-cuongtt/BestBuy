import React from 'react';
import loginStyles from '../../style/LoginStyle';
import {
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {userSignup} from '../../api/userLoginApi';
import {logo} from '../../../assets';
import {Text} from '../../component';
import {NavigationContainer} from '@react-navigation/native';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
});

const SignupScreen = ({navigation}) => {
  const handleSubmitSignup = value => {
    const data = {...value, gender: true, phone: '0910234567'};
    userSignup(data)
      .then(res => {
        // console.log(res.data);

        return navigation.navigate('LoginScreen');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={loginStyles.areaView}>
      <View style={loginStyles.logoView}>
        <Image source={logo} style={loginStyles.logo} resizeMode="stretch" />
      </View>
      <View style={loginStyles.loginForm}>
        <Formik
          initialValues={{email: '', password: '', name: ''}}
          onSubmit={handleSubmitSignup}
          validationSchema={loginSchema}>
          {({values, handleChange, handleSubmit, errors}) => (
            <>
              <View style={loginStyles.inputContainer}>
                <TextInput
                  style={loginStyles.textInput}
                  placeholder="Name"
                  value={values.name}
                  onChangeText={handleChange('name')}
                />
                {errors.name && (
                  <Text style={loginStyles.textError}>{errors.name}</Text>
                )}
              </View>
              <View style={loginStyles.inputContainer}>
                <TextInput
                  style={loginStyles.textInput}
                  placeholder="example@gmail.com"
                  value={values.email}
                  autoCapitalize="none"
                  onChangeText={handleChange('email')}
                />
                {errors.email && (
                  <Text style={loginStyles.textError}>{errors.email}</Text>
                )}
              </View>

              <View style={loginStyles.inputContainer}>
                <TextInput
                  style={loginStyles.textInput}
                  placeholder="********"
                  value={values.password}
                  autoCapitalize="none"
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
                  <Text style={loginStyles.signupText}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={loginStyles.btnSignUp}
                  onPress={() => navigation.navigate('LoginScreen')}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>
      <View style={loginStyles.bottomView}></View>
    </SafeAreaView>
  );
};

export default SignupScreen;
