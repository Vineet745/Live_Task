import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const creditStyle = StyleSheet.create({
  creditMain: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical:verticalScale(10)
  },
  balanceView: {
    backgroundColor: '#f3f3f3',
    height: verticalScale(57),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(18),
  },
  balanceViewText: {
    fontFamily: fonts.medium,
    color: color.darkPink,
  },
  balanceAmount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceAmountText: {
    fontFamily: fonts.semiBold,
    color: color.black,
    marginLeft: horizontalScale(5),
  },
  filterView: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(15),
  },
  filterTopView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: verticalScale(10),
    zIndex: 10,
  },
  taskDropDown: {
    zindex: -10,
  },
  sortView: {
    borderWidth: 1,
    borderColor: '#c0c0c0',
    flexDirection: 'row',
    width: horizontalScale(90),
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
    borderRadius: 5,
    height: verticalScale(38),
  },
  graphView: {
    height: verticalScale(390),
    justifyContent:"flex-end",
    paddingHorizontal:horizontalScale(15),
    borderWidth:1
  }, 
  graphCreditText:{
    fontFamily:fonts.medium,
    color:color.darkPink
  },
  bottonView: {
    paddingHorizontal: horizontalScale(15),
    marginBottom: verticalScale(50),
  },
  usedCoin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  usedCreditView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: verticalScale(20),
  },
  usedCreditViewText: {
    fontFamily: fonts.medium,
    fontSize: RFValue(sizes.h6, 667),
    color: color.black,
    fontWeight: '500',
  },
  spendCoins: {
    fontFamily: fonts.semiBold,
    marginLeft: horizontalScale(5),
    color: color.black,
    fontWeight: '300',
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
  transactionButton: {
    borderColor: color.lightGreen,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(38),
    marginVertical: verticalScale(10),
    borderRadius: 5,
    zIndex: -1,
  },
  transactionButtonText: {
    fontSize: RFValue(sizes.h6, 667),
    color: color.lightGreen,
    fontFamily: fonts.medium,
  },
});
