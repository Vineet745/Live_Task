import {StyleSheet} from 'react-native';
import {color, fonts, sizes} from '../../../constants/theme';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';

export const editProfileStyle = StyleSheet.create({
  editMain: {
    flex: 1,
    backgroundColor: color.white,
    paddingHorizontal: horizontalScale(10),
  },
  studentContainer: {
    borderBottomWidth: 1,
    height: verticalScale(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(5),
    marginVertical: verticalScale(15),
  },
  studentTopContainer: {
    justifyContent: 'space-evenly',
    height: '100%',
  },
  studentLabelName: {
    fontFamily: fonts.regular,
    color: color.black,
    fontSize: RFValue(sizes.h6, 667),
  },
  
  input: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontWeight:"600",
    fontSize: RFValue(sizes.h5, 667),
    width:horizontalScale(250),
  },
  
});
