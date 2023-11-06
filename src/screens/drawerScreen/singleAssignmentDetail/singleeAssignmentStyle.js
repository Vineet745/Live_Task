import {StyleSheet} from 'react-native';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../constants/dimension';

export const singleAssigmentStyle = StyleSheet.create({
  totalDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    height: verticalScale(40),
    borderColor: 'lightGrey ',
    paddingHorizontal: horizontalScale(8),
    marginVertical: verticalScale(8),
  },
  creditTask: {
    fontFamily: fonts.medium,
    color: color.black,
    fontSize: RFValue(sizes.h6, 667),
  },
  coinView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coinCount: {
    fontFamily: fonts.medium,
    color: color.black,
    marginLeft: horizontalScale(5),
  },
  dateText: {
    fontFamily: fonts.medium,
    color: color.black,
  },
  assignmentCardMain: {
    height: verticalScale(80),
    borderRadius: 5,
    borderColor: 'grey',
    marginVertical: verticalScale(5),
    shadowColor: 'lightgrey',
    borderBottomColor: 'lightGrey',
    borderBottomWidth: 1,
  },
  assignmentCardChild: {
    height: '100%',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  assignmentTopView: {
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
  subjectText: {
    fontFamily: fonts.medium,
    color: color.black,
    fontSize: RFValue(sizes.h6, 667),
  },
});
