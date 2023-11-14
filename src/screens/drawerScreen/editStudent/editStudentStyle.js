import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const editStudentStyle = StyleSheet.create({
  editMain: {
    flex: 1,
    backgroundColor: color.white,
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),
  },
  studentContainer: {
    borderBottomWidth: 1,
    height: verticalScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(5),
    marginVertical: verticalScale(15),
  },
  studentTopContainer: {
    justifyContent: 'space-evenly',
    height: '100%',
  },
  studentLabelName: {
    fontFamily: fonts.regular,
    color: color.black,
    fontSize: RFValue(sizes.h6, 667),
  },

  input: {
    fontFamily: fonts.medium,
    color: color.black,
    fontWeight: '600',
    fontSize: RFValue(sizes.h6, 667),
    width: horizontalScale(250),
  },

  inputBoxView: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingVertical: verticalScale(1),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: horizontalScale(10),
    justifyContent: 'space-between',
    backgroundColor: color.lightGrey,
  },
  inputbox: {
    fontFamily: fonts.medium,
    paddingLeft: horizontalScale(10),
    width: '90%',
    borderRadius: 30,
  },
  errorText: {
    color: 'red',
    fontFamily: fonts.medium,
    marginTop: verticalScale(5),
    fontSize: RFValue(8.5, 667),
  },
});
