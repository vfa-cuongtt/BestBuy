import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, SignupScreen, HomeScreen} from '../screens';
import {getAccessToken, setAccessToken} from '../utils/storage';
import {getAccessTokenSelector} from '../redux/selectors/loginSelector';
import {useSelector, useDispatch} from 'react-redux';

const Stack = createStackNavigator();

const RootNavigation = () => {
  const [isLogin, setIsLogin] = useState(false);
  const accessToken = useSelector(getAccessTokenSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const setAccessTokenToRedux = async () => {
      const accessTokenStorage = await getAccessToken();
      if (accessTokenStorage) {
        dispatch({
          type: 'SET_ACCESS_TOKEN',
          payload: accessTokenStorage,
        });
      }
    };
    setAccessTokenToRedux();
  }, []);

  useEffect(() => {
    if (accessToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [accessToken]);

  return (
    <NavigationContainer>
      <>
        {!isLogin ? (
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
          </Stack.Navigator>
        ) : (
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        )}
      </>
    </NavigationContainer>
  );
};
export default RootNavigation;