import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import BackgroundView from '../../component/BackgroundView/index';
import GlobalStyles from '../../style/GlobalStyles';
import DetailScreenStyles from '../../style/DetailScreenStyles';
import IonicIcon from 'react-native-vector-icons/Ionicons';

const ListItem = props => {
  return (
    <SafeAreaView style={[GlobalStyles.areaView]}>
      <BackgroundView>
        <View style={DetailScreenStyles.backView}>
          <View style={DetailScreenStyles.iconBackView}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <IonicIcon name="arrow-back" size={30} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </View>
      </BackgroundView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default ListItem;
