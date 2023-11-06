import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const addClassStyle = StyleSheet.create({
  detailView: {
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(15),
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
  input: {
    fontFamily: fonts.medium,
    paddingLeft: horizontalScale(10),
    width: '90%',
    borderRadius: 30,
  },
  errorText: {
    color: 'red',
    fontFamily: fonts.medium,
    marginTop: verticalScale(5),
  },
  customError: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginVertical: verticalScale(10),
  },
  customErrorText: {
    fontFamily: fonts.medium,
    color: color.darkPink,
  },
  dropDown: {
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: color.lightGrey,
    borderColor: 'grey',
    borderRadius: 10,
  },
  dropDownLogo: {width: horizontalScale(42), alignItems: 'center'},
});
