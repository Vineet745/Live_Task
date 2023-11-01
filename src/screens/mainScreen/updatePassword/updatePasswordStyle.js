import {StyleSheet} from 'react-native';
import {color, fonts, sizes} from '../../../constants/theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';

export const updatePasswordStyle = StyleSheet.create({
  resetPasswordMain: {
    flex: 1,
    backgroundColor: color.white,
  },
  resetPasswordTopView: {
    paddingTop: verticalScale(15),
    paddingHorizontal: horizontalScale(20),
    minHeight: verticalScale(580),
  },
  welcomeMain: {
    marginTop: verticalScale(5),
  },
  welcomeTextView: {
    borderBottomWidth: 2,
    width: horizontalScale(190),
    borderColor: color.darkPink,
    paddingBottom: verticalScale(5),
  },
  welcomeText: {
    fontFamily: fonts.segoeUI,
    color: color.black,
    fontSize: RFValue(sizes.h1, 667),
  },

  welcomePara: {
    marginVertical: verticalScale(8),
    color: color.black,
    fontFamily: fonts.regular,
    fontSize: RFValue(sizes.h7, 667),
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

  forgotPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: verticalScale(10),
  },

  forgotPasswordTextOne: {
    fontFamily: fonts.regular,
    color: color.black,
    fontSize: RFValue(sizes.h7, 667),
  },
  forgotPasswordTextTwo: {
    fontFamily: fonts.medium,
    color: color.lightGreen,
    fontSize: RFValue(sizes.h6, 667),
    marginLeft: horizontalScale(5),
  },

  errorText: {
    color: 'red',
    fontFamily: fonts.medium,
    marginTop: verticalScale(5),
    fontSize: RFValue(sizes.h8, 667),
  },

  forgotView: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgotText: {
    fontFamily: fonts.medium,
    color: color.black,
  },
  resetButton: {
    marginLeft:horizontalScale(8)
  },
  resetButtonText:{
    fontFamily:fonts.semiBold,
    color:color.lightGreen
  }
});
