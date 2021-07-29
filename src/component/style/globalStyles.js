import {StyleSheet, Dimensions} from 'react-native';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const GlobalStyles = StyleSheet.create({
  screenWidth: {
    width: screenWidth,
  },
  screenHeight: {
    height: screenHeight,
  },
  areaView: {
    flex: 1,
  },
  textWhite: {
    color: 'white',
  },
  textBold: {
    fontWeight: 'bold',
  },
});

export default GlobalStyles;
