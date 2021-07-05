import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import loginStyles from '../style/LoginStyle';
import {Formik} from 'formik';
import * as Yup from 'yup';
const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export default class Login extends Component {
  render() {
    return (
      <SafeAreaView style={loginStyles.areaView}>
        <View style={loginStyles.loginForm}>
          <Text>Login </Text>
          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={value => {
              console.log('test', value);
            }}
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
        </View>
      </SafeAreaView>
    );
  }
}
