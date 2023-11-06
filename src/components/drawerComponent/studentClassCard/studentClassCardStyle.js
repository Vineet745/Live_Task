import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {color, fonts} from '../../../constants/theme';

export const studentClassCardStyle = StyleSheet.create({
  studentClassCardMain: {
    borderBottomWidth: 1,
    height: verticalScale(80),
    paddingHorizontal: horizontalScale(10),
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    borderColor: '#646464',
  },
  studentClassCardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  studentClassCardClassName: {
    fontFamily: fonts.semiBold,
    color: color.black,
  },
  studentClassCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  studentClassCardAssignmentName: {
    fontFamily: fonts.regular,
    color: color.black,
  },
  studentClassCardNumber: {
    fontFamily: fonts.regular,
    color: color.black,
  },
});
