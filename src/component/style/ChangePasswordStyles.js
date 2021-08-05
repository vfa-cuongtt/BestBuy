import {StyleSheet} from 'react-native';

const ChangePasswordStyles = StyleSheet.create({
  blockTop: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
    flexDirection: 'row',
  },
  backView: {
    paddingHorizontal: 10,
    paddingTop: 10,
    flexDirection: 'row',
  },
  iconBackView: {
    width: '10%',
  },
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  textTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  blockContainer: {
    height: '90%',
    // backgroundColor: 'red',
  },
  blockUserInfo: {
    paddingHorizontal: 10,
    marginVertical: 40,
    backgroundColor: 'white',
    height: '80%',
    borderRadius: 8,
  },
  password: {
    justifyContent: 'center',
    height: '20%',
    marginTop: 20,
    paddingHorizontal: 10,
    // backgroundColor: 'red',
  },
  passwordConfirm: {
    justifyContent: 'center',
    height: '20%',
    paddingHorizontal: 10,
    // backgroundColor: 'blue',
  },
  blockButton: {
    height: '30%',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  textInput: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 15,
  },
  textError: {
    color: 'red',
  },
  modal: {
    flex: 1 / 5,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContainer: {
    height: '50%',
    alignItems: 'center',
  },
  modalButton: {
    width: '40%',
    height: '50%',
    marginTop: 10,
  },
  textSize: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'black',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 8,
  },
  txtTitleSuccess: {
    paddingBottom: 10,
  },
});
export default ChangePasswordStyles;
