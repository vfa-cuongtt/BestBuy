import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {background} from '../../../assets';

const BackgroundView = ({children, style}) => {
  return (
    <ImageBackground
      source={background}
      style={styles.background}
      resizeMode="cover">
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
export default BackgroundView;
