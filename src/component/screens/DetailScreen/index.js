import React from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const DetailScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      {/* <View style={styles.categoriesList}>
            <FlatList
              horizontal={true}
              keyExtractor={item => `${item.id}`}
              data={product}
              renderItem={_renderCategoriesItem}
            />
            <FlatList
              numColumns={2}
              keyExtractor={(item, index) => `${item.name}_${item.index}`}
              data={products}
              renderItem={_renderItem}
            />
          </View> */}
    </SafeAreaView>
  );
};

export default DetailScreen;
