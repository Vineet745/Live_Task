import {StyleSheet} from 'react-native';
import {color, fonts, sizes} from '../../../constants/theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';

export const resetPasswordStyle = StyleSheet.create({
  forgotPasswordMain: {
    flex: 1,
    backgroundColor: color.white,
  },
  forgotPasswordTopView: {
    paddingHorizontal: horizontalScale(20),
    minHeight: verticalScale(580),
  },
  welcomeMain: {
    marginTop: verticalScale(8),
  },
  welcomeTextView: {
    borderBottomWidth: 2,
    width: horizontalScale(220),
    borderColor: color.darkPink,
    paddingBottom: verticalScale(5),
  },
  welcomeText: {
    fontFamily: fonts.segoeUI,
    color: color.black,
    fontSize: RFValue(sizes.h1, 667),
  },

  welcomePara: {
    color: color.black,
    fontFamily: fonts.regular,
    fontSize: RFValue(sizes.h8,667),
  },

  detailView: {
    paddingVertical: verticalScale(20),
  },

  inputBoxView: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingVertical: verticalScale(2),
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
});
