import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const singleStudentStyle = StyleSheet.create({
  singleStudentMain: {
    paddingVertical: verticalScale(10),
    flex: 1,
    backgroundColor: color.white,
  },
  singleStudentInner: {
    paddingHorizontal: horizontalScale(15),
  },
  singleStudentHeader: {
    minHeight: verticalScale(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(10),
  },
  singleStudentLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailText: {
    fontFamily: fonts.medium,
    marginLeft: horizontalScale(15),
    color: color.black,
    fontSize: RFValue(sizes.h5, 667),
  },
  singleStudentRightView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileEditButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: color.lightGreen,
    width: horizontalScale(70),
    height: verticalScale(25),
    borderRadius: 5,
    paddingHorizontal: horizontalScale(5),
    marginRight: horizontalScale(10),
  },
  profileEditText: {
    fontFamily: fonts.semiBold,
    fontSize: RFValue(sizes.h7, 667),
    color: color.white,
  },

  singleStudentDetails: {
    marginVertical: verticalScale(15),
  },
  studentDetailView: {
    borderBottomWidth: 1,
    paddingVertical: verticalScale(10),
    marginVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
  },
  studentName: {
    fontFamily: fonts.medium,
    color: color.black,
    fontSize: RFValue(sizes.h6, 667),
  },
});
