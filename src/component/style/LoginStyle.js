import {StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create({
  areaView: {
    flex: 1,
  },
  loginForm: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  textInput: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
  },
  inputContainer: {
    padding: 8,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btnSignIn: {
    backgroundColor: 'red',
    padding: 8,
    width: '30%',
    alignItems: 'center',
    marginTop: 8,
    borderRadius: 8,
  },
  btnSignUp: {
    backgroundColor: 'green',
    padding: 8,
    width: '30%',
    alignItems: 'center',
    marginTop: 8,
    borderRadius: 8,
  },
  textError: {
    color: 'red',
  },
  fbView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default loginStyles;
