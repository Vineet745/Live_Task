import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const assignClassStyle = StyleSheet.create({
  assingClassMain: {
    flex: 1,
    backgroundColor: color.white,
  },

  assignClassTopView: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),
    minHeight: verticalScale(520),
  },
  selectText: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.h5, 667),
  },
  inputView: {
    marginTop: verticalScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f3f3f3',
  },
  searchTask: {
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: horizontalScale(5),
    justifyContent: 'space-between',
    backgroundColor: '#f3f3f3',
    borderRadius: 5,
    height: verticalScale(36),
  },
  classCardView: {
    borderBottomWidth: 1,
    marginVertical: verticalScale(10),
    paddingVertical: verticalScale(10),
    borderColor: '#9e9e9e',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  classText: {
    fontFamily: fonts.medium,
    color: color.black,
    fontSize: RFValue(sizes.h6, 667),
  },
  btnGroup: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cancelButton: {
    backgroundColor: '#dedede',
    width: '50%',
    height: verticalScale(42),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    fontFamily: fonts.medium,
    color: color.black,
  },
  doneButton: {
    backgroundColor: '#04c38c',
    width: '50%',
    height: verticalScale(42),
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneButtonText: {
    fontFamily: fonts.medium,
    color: color.white,
  },
});
