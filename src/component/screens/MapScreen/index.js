import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {removeAccessToken} from '../../utils/storage';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {useDispatch} from 'react-redux';

const MapScreen = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await removeAccessToken();
    dispatch({type: 'LOGOUT'});
  };

  return (
    <View>
      <Text>MapScreen</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>

      <MapView
        style={{height: '100%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 10.766579,
          longitude: 106.665268,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: 10.766579, longitude: 106.665268}}
          title="Hiếu Sneaker"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({});
export default MapScreen;
