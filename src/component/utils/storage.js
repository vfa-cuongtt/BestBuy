import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAccessToken = async value => {
  try {
    await AsyncStorage.setItem('@accessToken', value);
  } catch (err) {
    console.log(err);
  }
};

export const getAccessToken = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('@accessToken');
    return accessToken;
  } catch (err) {
    console.log(err);
  }
};

export const removeAccessToken = async () => {
  try {
    const accessToken = await AsyncStorage.removeItem('@accessToken');
    return accessToken;
  } catch (err) {
    console.error(err);
  }
};

export const setEmail = async value => {
  try {
    await AsyncStorage.setItem('@email', value);
  } catch (err) {
    console.log(err);
  }
};

export const getEmail = async () => {
  try {
    const email = await AsyncStorage.getItem('@email');
    // console.log('email', email);
    return email;
  } catch (err) {
    console.log(err);
  }
};

export const removeEmail = async () => {
  try {
    const email = await AsyncStorage.removeItem('@email');
    // console.log('email', email);
    return email;
  } catch (err) {
    console.error(err);
  }
};

export const setIsLogin = async value => {
  try {
    await AsyncStorage.setItem('@isLogin', value);
  } catch (err) {
    console.log(err);
  }
};

export const getIsLogin = async () => {
  try {
    const isLogin = await AsyncStorage.getItem('@isLogin');
    return isLogin;
  } catch (err) {
    console.log(err);
  }
};

export const removeIsLogin = async () => {
  try {
    const isLogin = await AsyncStorage.removeItem('@isLogin');
    return isLogin;
  } catch (err) {
    console.error(err);
  }
};
