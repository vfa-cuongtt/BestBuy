import React from 'react';
import loginStyles from '../../style/LoginStyle';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {userSignup} from '../../api/userLoginApi';
const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
});

const SignupScreen = () => {
  const handleSubmitSignup = value => {
    const data = {...value, gender: true, phone: '0910234567'};
    userSignup(data)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={loginStyles.areaView}>
      <View style={loginStyles.loginForm}>
        <Text>Login </Text>
        <Formik
          initialValues={{email: '', password: '', name: ''}}
          onSubmit={handleSubmitSignup}
          validationSchema={loginSchema}>
          {({values, handleChange, handleSubmit, errors}) => (
            <>
              <View style={loginStyles.inputContainer}>
                <Text>Name</Text>
                <TextInput
                  style={loginStyles.textInput}
                  placeholder="example@gmail.com"
                  value={values.name}
                  onChangeText={handleChange('name')}
                />
                {errors.name && (
                  <Text style={loginStyles.textError}>{errors.name}</Text>
                )}
              </View>
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
                  <Text>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={loginStyles.btnSignUp}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
