import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const profileStyle = StyleSheet.create({
    
  profileImageContainer: {
    height: verticalScale(130),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageRectangle: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  imageCircle: {
    borderWidth: 1,
    height: 130,
    width: 130,
    borderRadius: 65,
    overflow:"hidden"
  },
  imageEdit: {
    backgroundColor: '#333333',
    borderRadius: 50,
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: verticalScale(8),
    right: 8,
  },
  profileEditButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: color.lightGreen,
    width: horizontalScale(70),
    height: verticalScale(25),
    borderRadius: 5,
    paddingHorizontal: horizontalScale(5),
    position: 'absolute',
    top: verticalScale(10),
    right: horizontalScale(0),
  },
  profileEditText: {
    fontFamily: fonts.semiBold,
    fontSize: RFValue(sizes.h7, 667),
    color: color.white,
  },
  profileDetail: {
    paddingVertical: verticalScale(15),
  },
  singleDetailContainer: {
    borderBottomWidth: 1,
    borderColor: '#646464',
    paddingVertical: verticalScale(10),
    marginTop: verticalScale(10),
  },
  singleDetailContainerLable: {
    fontFamily: fonts.regular,
    color: color.black,
  },
  singleDetailContainerText: {
    fontFamily: fonts.semiBold,
    color: color.black,
    marginVertical: verticalScale(5),
    fontSize: RFValue(sizes.h6, 667),
  },
  creditContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  creditLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  creditText: {
    fontFamily: fonts.semiBold,
    color: color.black,
    marginLeft: verticalScale(5),
  },
  buyButton: {
    backgroundColor: color.yellow,
    width: horizontalScale(70),
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(30),
    borderRadius: 5,
  },
  buyText: {
    color: color.black,
    fontFamily: fonts.semiBold,
  },
  updatePassword: {
    borderBottomWidth: 1,
    borderColor: '#646464',
    paddingVertical: verticalScale(15),
    marginVertical: verticalScale(10),
  },
  updatePasswordInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  updatePasswordText: {
    fontSize: RFValue(sizes.h6, 667),
    color: color.black,
    fontFamily: fonts.semiBold,
  },
  logOutContainer: {
    marginVertical: verticalScale(15),
  },
  logoutText: {
    color: color.darkPink,
    fontFamily: fonts.semiBold,
    fontSize: RFValue(sizes.h6, 667),
  },
});
