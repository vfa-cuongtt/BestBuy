import {StyleSheet} from 'react-native';

const HomeScreenStyles = StyleSheet.create({
  areaView: {
    flex: 1,
  },
  topView: {
    flex: 1 / 3,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  contentView: {
    flex: 1,
    paddingVertical: 10,
  },
  categoriesList: {
    flex: 1 / 10,
    paddingHorizontal: 20,
  },
  boxCategoriesList: {
    flex: 1,
    paddingHorizontal: 10,
  },
  bottomView: {
    flex: 1 / 3,
    paddingHorizontal: 20,
  },
  bottomBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  allCategoryText: {
    fontSize: 20,
  },
  showAllTextL: {
    fontSize: 16,
  },
  iconView: {
    flex: 1,
  },
});
export default HomeScreenStyles;
