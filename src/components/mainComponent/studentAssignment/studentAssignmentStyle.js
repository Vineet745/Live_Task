import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const studentAssignmentStyle = StyleSheet.create({
  studentMain: {
    borderBottomWidth: 1,
    paddingHorizontal: horizontalScale(16),
    height: verticalScale(55),
    justifyContent: 'space-evenly',
    borderColor: '#b1b1b1',
  },
  studentMainTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  studentMainTopText: {
    fontFamily: fonts.regular,
    color: color.black,
    fontSize: RFValue(sizes.h5, 667),
  },
  purchaseDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  purchaseText: {
    color: color.darkPink,
    fontFamily: fonts.segoeUI,
    fontSize: RFValue(sizes.h3, 667),
  },
  timeDetail: {
    fontFamily: fonts.segoeUI,
    fontSize: RFValue(sizes.h8, 667),
    color: color.black,
  },
});
