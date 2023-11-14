import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const addStudentStyle = StyleSheet.create({
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
    fontSize:RFValue(sizes.h8,667)
  },
  lineBreak: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftLine: {
    borderBottomWidth: 1,
    width: '40%',
  },
  rightLine: {
    borderBottomWidth: 1,
    width: '40%',
  },
  centerText: {
    fontFamily: fonts.regular,
    color: color.black,
  },
  csvButtonView: {
    marginTop: verticalScale(35),
    minHeight: verticalScale(110),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  csvButtonText: {
    fontFamily: fonts.medium,
    color: color.black,
    fontSize: RFValue(sizes.h5, 667),
  },
});
