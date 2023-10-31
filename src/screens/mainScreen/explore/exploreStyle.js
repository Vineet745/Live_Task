import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../constants/dimension';

export const exploreStyle = StyleSheet.create({
  exploreMain: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: horizontalScale(18),
    paddingVertical: verticalScale(10),
  },
  inputView: {
    height: verticalScale(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchTask: {
    borderWidth: 1,
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: horizontalScale(5),
    justifyContent: 'space-between',
    backgroundColor: '#f3f3f3',
    borderRadius: 5,
  },
  sortView: {
    borderWidth: 1,
    flexDirection: 'row',
    width: horizontalScale(90),
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
