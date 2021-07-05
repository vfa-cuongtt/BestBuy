import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const {width: screenWidth} = Dimensions.get('window');

export default class ProductItem extends Component {
  render() {
    return (
      <View style={styles.productItem}>
        <View style={styles.productHeader}>
          <View style={styles.productPrice}>
            <MaterialIcons name="attach-money" size={18} />
            <Text style={styles.productPriceText}>
              {this.props.product.price}
            </Text>
          </View>
          <AntIcon name="heart" color="red" size={20} />
        </View>
        <Image
          source={{uri: this.props.product.image}}
          style={styles.productImage}
        />
        <Text style={styles.productName}>{this.props.product.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productItem: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: (screenWidth - 60) / 2,
    height: 200,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 20,
    marginHorizontal: 7,
  },
  productImage: {
    width: 140,
    height: 110,
    alignSelf: 'center',
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productPrice: {
    flexDirection: 'row',
  },
  productPriceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 16,
    fontWeight: '400',
  },
});
