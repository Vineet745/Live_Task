import {StyleSheet} from 'react-native';
import {color, fonts, sizes} from '../../../constants/theme';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';

export const editAssignmentStyle = StyleSheet.create({
  editAssignmentMain: {
    flex: 1,
    backgroundColor: color.white,
  },
  editAssignmentView: {
    marginVertical: verticalScale(10),
    flex: 1,
    paddingHorizontal: horizontalScale(5),
  },
  editAssignmentBox: {
    borderBottomWidth: 1,
    paddingHorizontal: horizontalScale(10),
    marginVertical: verticalScale(8),
  },
  editAssignmentLabel: {
    color: color.black,
    fontFamily: fonts.regular,
    fontSize: RFValue(13, 667),
  },
  editBottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: verticalScale(8),
    alignItems: 'center',
  },
  editAssignmentInput: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.h6, 667),
    width: '90%',
    paddingVertical: verticalScale(2),
    paddingHorizontal: 0,
    paddingLeft: horizontalScale(5),
  },
});
