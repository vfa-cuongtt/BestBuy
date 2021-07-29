import {StyleSheet} from 'react-native';

const DetailScreenStyles = StyleSheet.create({
  backView: {
    paddingHorizontal: 10,
    paddingTop: 10,
    flexDirection: 'row',
  },
  iconBackView: {
    width: '10%',
  },
  blockImg: {
    height: '40%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  titleView: {
    justifyContent: 'center',
    // backgroundColor: 'red',
    alignItems: 'center',
    width: '80%',
  },
  blockName: {
    paddingVertical: 10,
  },
  textTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  blockDetail: {
    height: '60%',
    // backgroundColor: 'green',
  },
  blockPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  textPrice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textSize: {
    fontWeight: 'bold',
  },
  blockContent: {
    flex: 1,
    // backgroundColor: 'green',
    paddingHorizontal: 20,
  },
  iconLike: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  viewImg: {
    // height: '40%',
    // backgroundColor: 'white',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  blockSize: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(178,178,178,0.5)',
  },
  size: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 9,
    marginVertical: 5,
  },
  active: {
    backgroundColor: 'black',
  },
  blockDescription: {
    // backgroundColor: 'red',
    paddingTop: 10,
  },
  blockButton: {
    height: '10%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'black',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 8,
  },
});
export default DetailScreenStyles;
