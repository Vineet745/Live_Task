import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const myClassCardStyle = StyleSheet.create({
  dashboardTaskMain: {
    minHeight: verticalScale(160),
    marginVertical: verticalScale(10),
    borderRadius: 5,
    backgroundColor: 'white',
    padding: verticalScale(5),
    elevation: 5,
  },
  topView: {
    padding: verticalScale(6),
    minHeight: verticalScale(80),
    borderColor: 'green',
  },
  demoText: {
    fontFamily: fonts.medium,
    color: color.black,
    fontSize: RFValue(16, 667),
  },

  middleView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: verticalScale(15),
  },
  subjectText: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.h7, 667),
  },
  assignMentText: {
    marginTop: verticalScale(15),
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.h7, 667),
  },

  bottomView: {
    minHeight: verticalScale(70),
    justifyContent: 'flex-end',
  },
  bottomViewInnerView: {
    height: verticalScale(40),
    backgroundColor: '#fdcfe1',
  },
  buttonContainer: {
    position: 'absolute',
    top: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  iconTextContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttons: {
    backgroundColor: color.white,
    borderRadius: 22,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  countText: {
    fontFamily: fonts.medium,
    color: color.black,
    letterSpacing: horizontalScale(1),
    fontSize: RFValue(sizes.h7, 667),
  },
});
