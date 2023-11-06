import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../constants/dimension';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const ClassAssignmentCardStyle = StyleSheet.create({
  classAssignmentCardMain: {
    height: verticalScale(70),
    borderRadius: 5,
    borderColor: 'grey',
    marginVertical: verticalScale(5),
    elevation: 1,
    shadowColor: 'lightgrey',
  },
  classAssignmentCardChild: {
    height: '100%',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  classAssignmentTopView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  assignmentText: {
    fontFamily: fonts.semiBold,
    color: color.black,
  },
  classDeleteView: {
    backgroundColor: '#d9d9d9',
    borderRadius: 50,
    padding: moderateScale(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  classDateText: {
    fontFamily: fonts.regular,
    color: color.black,
    fontSize: RFValue(sizes.h6, 667),
  },
});
