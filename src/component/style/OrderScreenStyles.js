import {StyleSheet} from 'react-native';

const OrderScreenStyle = StyleSheet.create({
  blockTop: {
    justifyContent: 'center',
    // backgroundColor: 'red',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  textTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  blockContainer: {
    justifyContent: 'center',
    // backgroundColor: 'green',
    // alignItems: 'center',
    height: '80%',
  },

  blockBottom: {
    height: '20%',
    width: '100%',
    paddingHorizontal: 10,
  },

  payTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '25%',
  },
  textPrice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textSize: {
    fontSize: 20,
  },
  buttonView: {
    // paddingVertical: 15,
    height: '50%',
  },
  button: {
    backgroundColor: '#3a3a3b',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
  },
});

export default OrderScreenStyle;
