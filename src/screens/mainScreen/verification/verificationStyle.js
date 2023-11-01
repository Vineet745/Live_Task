import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {color, fonts, sizes} from '../../../constants/theme';
import {horizontalScale, verticalScale} from '../../../constants/dimension';

export const verificationStyle = StyleSheet.create({
  verificationMain: {
    flex: 1,
    backgroundColor: color.white,
  },
  verificationTopView: {
    paddingTop: verticalScale(15),
    paddingHorizontal: horizontalScale(20),
    minHeight: verticalScale(580),
  },
  welcomeMain: {
    marginTop: verticalScale(8),
  },
  welcomeTextView: {
    borderBottomWidth: 2,
    width: horizontalScale(140),
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
    fontSize: RFValue(11, 667),
  },
  verificationCodeView: {
    marginTop: verticalScale(20),
  },
  verificationCodeText: {
    fontFamily: fonts.medium,
    color: color.black,
  },

  inputBoxes: {
    flexDirection: 'row',
    marginVertical: verticalScale(20),
    paddingVertical: verticalScale(10),
    justifyContent: 'space-evenly',
  },
  inputBox: {
    borderWidth: 0.5,
    width: horizontalScale(45),
    height: verticalScale(50),
    backgroundColor: color.lightGrey,
    borderRadius: 5,
    borderColor: 'grey',
    textAlign: 'center',
  },
  button: {
    width: horizontalScale(153),
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    borderRadius: 30,
    backgroundColor: color.lightGreen,
  },
  buttonText: {
    color: color.white,
    fontFamily: fonts.segoeUI,
    fontSize: RFValue(sizes.h4, 667),
    fontWeight: '600',
  },
});
