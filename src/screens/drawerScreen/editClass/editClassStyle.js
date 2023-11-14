import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const editClassStyle = StyleSheet.create({
  editMain: {
    flex: 1,
    backgroundColor: color.white,
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),
  },
  classContainer: {
    borderBottomWidth: 1,
    height: verticalScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(5),
    marginVertical: verticalScale(15),
  },
  classTopContainer: {
    justifyContent: 'space-evenly',
    height: '100%',
  },
  classLabelName: {
    fontFamily: fonts.regular,
    color: color.black,
    fontSize: RFValue(sizes.h6, 667),
    marginLeft: horizontalScale(5),
  },

  input: {
    fontFamily: fonts.medium,
    color: color.black,
    fontWeight: '600',
    fontSize: RFValue(sizes.h6, 667),
    width: horizontalScale(250),
  },

  dropDown: {
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: color.lightGrey,
    borderColor: 'grey',
    borderRadius: 10,
    width: horizontalScale(330),
    alignSelf: 'center',
  },
  dropDownLogo: {width: horizontalScale(42), alignItems: 'center'},
  customError: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginVertical: verticalScale(10),
  },
  customErrorText: {
    fontFamily: fonts.medium,
    color: color.darkPink,
  },
  assignmentName: {
    backgroundColor: '#f3f3f3',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'space-between',
    borderRadius: 10,
    borderColor: '#c3c3c3',
    // marginVertical:verticalScale(10)
  },
  assignmentLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: horizontalScale(5),
  },
  selectBoxInput:{
    fontFamily: fonts.medium,
    color: color.black,
    fontWeight: '600',
    fontSize: RFValue(sizes.h6, 667),
    width:"90%"
  }
});
