import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const teacherDashboardTaskStyle = StyleSheet.create({
  dashboardTaskMain: {
    height: verticalScale(160),
    marginVertical: verticalScale(10),
    borderRadius: 5,
    backgroundColor: 'white',
    padding: verticalScale(5),
    elevation: 10,
  },
  topView: {
    padding: verticalScale(6),
    height: verticalScale(80),
    borderColor: 'green',
  },
  demoText: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(16, 667),
  },

  middleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: verticalScale(15),
  },
  subjectText: {
    fontFamily: fonts.medium,
    color: color.black,
    fontSize: RFValue(sizes.h7, 667),
  },
  yearsText: {
    fontFamily: fonts.medium,
    color: color.black,
    fontSize: RFValue(sizes.h7, 667),
  },

  bottomView: {
    minHeight: verticalScale(70),
    justifyContent: 'flex-end',
  },
  bottomViewInnerView: {
    height: verticalScale(45),
    backgroundColor: '#fdcfe1',
  },
  buttonContainer: {
    position: 'absolute',
    top: 5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconTextContainer: {
    height: verticalScale(60),
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
