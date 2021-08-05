import {StyleSheet} from 'react-native';

const SettingScreenStyles = StyleSheet.create({
  blockTop: {
    justifyContent: 'center',
    // backgroundColor: 'red',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  textTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  blockContainer: {
    height: '90%',
  },
  blockUserInfo: {
    height: '20%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  blockAvatar: {
    flexDirection: 'row',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  userInfo: {
    paddingHorizontal: 10,
  },
  txtName: {fontSize: 23},
  blockTitle: {
    height: 60,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(178,178,178,0.5)',
    flexDirection: 'row',
  },
  right: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '90%',
    justifyContent: 'space-between',
  },
  blockSetting: {
    height: '80%',
    // backgroundColor: 'blue',
  },
  blockBottom: {
    height: '20%',
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default SettingScreenStyles;
