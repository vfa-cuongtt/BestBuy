import {StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoView: {
    flex: 1 / 2,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {width: '75%', height: '60%'},

  loginForm: {
    flex: 1 / 2,
    // backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  textInput: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 15,
  },
  inputContainer: {
    padding: 8,
  },
  buttonView: {
    paddingHorizontal: 10,
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  signupText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  btnSignIn: {
    backgroundColor: '#3a3a3b',
    padding: 10,
    width: '100%',
    height: 40,
    alignItems: 'center',
    marginTop: 8,
    borderRadius: 15,
  },

  btnSignUp: {
    paddingVertical: 10,
    alignItems: 'center',
  },

  textError: {
    color: 'red',
  },
  bottomView: {
    flex: 1 / 4,
  },

  fbView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default loginStyles;
