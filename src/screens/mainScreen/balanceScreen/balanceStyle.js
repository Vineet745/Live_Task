import {StyleSheet} from 'react-native';
import {color, fonts, sizes} from '../../../constants/theme';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';

export const balanceStyle = StyleSheet.create({
  balanceMain: {
    flex: 1,
    backgroundColor: color.lightPink,
  },
  balanceTopView: {
    height: verticalScale(150),
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
  },

  balanceTopViewText: {
    color: color.black,
    fontFamily: fonts.segoeUI,
    fontSize: RFValue(sizes.h3, 667),
  },
  amountView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  amountText: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.h1, 667),
    marginLeft: horizontalScale(15),
  },
  bottomView: {
    flex: 1,
    backgroundColor: color.white,
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
    paddingHorizontal: horizontalScale(30),
    paddingVertical: verticalScale(30),
  },
  refillText: {
    fontSize: RFValue(sizes.h3, 667),
    color: color.black,
    fontFamily: fonts.medium,
  },
  inputWrapper: {
    borderWidth: 1,
    marginTop: verticalScale(25),
    borderRadius: 10,
    backgroundColor: '#f3f3f3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '88%',
    borderRadius: 10,
    fontFamily: fonts.medium,
    color: color.black,
  },
  informationView: {
    marginVertical: verticalScale(10),
  },
  informationText: {
    color: color.darkPink,
    fontFamily: fonts.segoeUI,
    fontSize: RFValue(sizes.h5, 667),
  },
  buyButton: {
    backgroundColor: color.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(38),
    marginVertical: verticalScale(15),
    borderRadius: 5,
    zIndex: -1,
  },
  buyButtonText: {
    color: color.black,
    fontFamily: fonts.medium,
    fontSize: RFValue(sizes.h5, 667),
  },
  notNowWrapper: {
    paddingVertical: verticalScale(10),
    alignItems:"center",
    justifyContent:"center"
  },
  notNowText: {
    textAlign: 'center',
    paddingBottom:verticalScale(2),
    borderBottomWidth:1,
    color:color.black,
    fontFamily:fonts.medium
},
});
