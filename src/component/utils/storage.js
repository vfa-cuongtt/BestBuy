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
    console.log('accessToken', accessToken);
    return accessToken;
  } catch (err) {
    console.log(err);
  }
};

export const removeAccessToken = async () => {
  try {
    const accessToken = await AsyncStorage.removeItem('@accessToken');
    console.log('accessToken', accessToken);
    return accessToken;
  } catch (err) {
    console.error(err);
  }
};
