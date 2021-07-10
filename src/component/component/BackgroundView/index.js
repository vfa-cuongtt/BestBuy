import React from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';
import {background} from '../../../assets/background/background.jpg';

const BackgroundView = ({children, style}) => {
  return (
    <ImageBackground source={background} style={styles.background}>
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
