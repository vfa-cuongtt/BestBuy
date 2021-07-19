import {StyleSheet} from 'react-native';

const RootTabStyles = StyleSheet.create({
  tabBarIconContent: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  active: {
    position: 'absolute',
    bottom: 5,
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: 'center',
  },
});

export default RootTabStyles;
