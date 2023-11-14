import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../constants/dimension';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const studentProgressCardStyle = StyleSheet.create({
  progressCardMain: {
    borderBottomWidth: 1,
    paddingHorizontal: horizontalScale(10),
    flexDirection: 'column',
    borderColor: '#646464',
    marginVertical: verticalScale(10),
    paddingVertical: verticalScale(5),
  },
  progressCardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressCardStudentName: {
    fontFamily: fonts.medium,
    color: color.black,
    fontSize: RFValue(sizes.h4, 667),
  },
  studentDeleteView: {
    backgroundColor: '#d9d9d9',
    borderRadius: 50,
    padding: moderateScale(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressCardMiddle: {
    marginVertical: verticalScale(8),
  },

  progressText: {
    fontFamily: fonts.medium,
    color: color.black,
    fontSize: RFValue(sizes.h6, 667),
    marginVertical: verticalScale(6),
  },

  progressView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  progressCount: {
    fontFamily: fonts.medium,
    color: color.black,
  },

  studentClassCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  studentClassCardAssignmentName: {
    fontFamily: fonts.medium,
    color: color.black,
  },
  studentClassCardNumber: {
    fontFamily: fonts.medium,
    color: color.black,
  },
});
