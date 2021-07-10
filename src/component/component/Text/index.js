import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CustomText = ({children, style, ...props}) => {
  return (
    <Text style={[styles.poppinFont, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  poppinFont: {
    // fontFamily: 'poppins',
    // fontWeight: '800',
  },
});

export default CustomText;
