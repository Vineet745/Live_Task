import {StyleSheet} from 'react-native';
import {color, fonts, sizes} from '../../../constants/theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';

export const loginStyle = StyleSheet.create({
  loginMain: {
    flex: 1,
    backgroundColor: color.white,
  },
  loginTopView: {
    paddingTop: verticalScale(15),
    paddingHorizontal: horizontalScale(20),
    minHeight: verticalScale(480),
  },
  welcomeMain: {
    marginTop: verticalScale(30),
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
    fontFamily: fonts.light,
    fontSize: RFValue(sizes.h7, 667),
  },

  detailView: {
    paddingVertical: verticalScale(15),
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

  forgotPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: verticalScale(10),
  },

  forgotPasswordTextOne: {
    fontFamily: fonts.regular,
    color: color.black,
    fontSize: RFValue(sizes.h6, 667),
  },
  forgotPasswordTextTwo: {
    fontFamily: fonts.medium,
    color: color.lightGreen,
    fontSize: RFValue(sizes.h6, 667),
    marginLeft: horizontalScale(5),
  },

  lineBreak: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftLine: {
    borderBottomWidth: 1,
    width: '32%',
  },
  rightLine: {
    borderBottomWidth: 1,
    width: '32%',
  },
  centerText: {
    fontFamily: fonts.regular,
    color: color.black,
  },
  socialAccounts: {
    flexDirection: 'row',
    marginVertical: verticalScale(20),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  socialAccountItem: {
    backgroundColor: '#f0f0f0',
    padding: verticalScale(8),
    borderRadius: 30,
  },

  registerOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(10),
  },
  registerOptionTextOne: {
    fontFamily: fonts.regular,
    color: color.black,
    fontSize: RFValue(sizes.h7, 667),
  },
  registerLinkText: {
    fontFamily: fonts.regular,
    color: color.lightGreen,
    fontSize: RFValue(sizes.h7, 667),
    marginLeft: horizontalScale(5),
    borderBottomWidth: 1,
    borderBottomColor: color.lightGreen,
  },
});
