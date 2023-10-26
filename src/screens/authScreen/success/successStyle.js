import {StyleSheet} from 'react-native';
import {color, fonts, sizes} from '../../../constants/theme';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';

export const successStyle = StyleSheet.create({
  successMain: {
    flex: 1,
    color: color.white,
  },
  successTopView:{
    minHeight:verticalScale(580),
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
  },

  successTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: horizontalScale(70),
    width: horizontalScale(170),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: fonts.medium,
    fontSize: RFValue(sizes.h4, 667),
    color: color.black,
  },
  messageContainer: {
    marginTop: verticalScale(50),
    height: verticalScale(250),
    position: 'relative',
  },
  thirdImage: {
    width: horizontalScale(265),
    height: verticalScale(145),
    backgroundColor: '#FDA2C4',
    borderRadius: 10,
    position: 'absolute',
    top: verticalScale(80),
    left: horizontalScale(40),
  },
  secondImage: {
    width: horizontalScale(295),
    height: verticalScale(165),
    backgroundColor: '#FA166B99',
    borderRadius: 10,
    position: 'absolute',
    top: verticalScale(50),
    left: horizontalScale(23),
  },
  firstImage: {
    width: horizontalScale(325),
    height: verticalScale(195),
    backgroundColor: '#FA166B',
    borderRadius: 10,
    position: 'absolute',
    top: verticalScale(10),
    left: horizontalScale(5),
    paddingVertical: verticalScale(10),
    flexDirection: 'coloumn',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  roundOne: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: verticalScale(3),
  },
  roundTwo: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 35,
    alignSelf: 'center',
  },
  successText: {
    color: color.white,
    fontFamily: fonts.semiBold,
    fontSize: RFValue(sizes.h5, 667),
  },
  successInformation: {
    color: color.white,
    fontFamily: fonts.medium,
    fontSize: RFValue(sizes.h7, 667),
  },
});
