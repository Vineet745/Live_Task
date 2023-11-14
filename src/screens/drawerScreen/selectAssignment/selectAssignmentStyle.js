import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const selectAssignmentStyle = StyleSheet.create({
  selectAssignmentMain: {
    flex: 1,
    backgroundColor: 'white',
  },
  selectAssignmentTopView: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    height: verticalScale(525),
  },
  assignmentText: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.h5, 667),
    marginVertical: verticalScale(3),
    marginLeft: horizontalScale(5),
  },
  inputView: {
    marginTop: verticalScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchTask: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: horizontalScale(5),
    justifyContent: 'space-between',
    backgroundColor: '#f3f3f3',
    borderRadius: 5,
    height: verticalScale(36),
  },
  addButton: {
    backgroundColor: '#04c38c',
    width: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: verticalScale(36),
    borderRadius: 5,
  },
  assignmentCardMain: {
    marginTop: verticalScale(15),
    // paddingVertical: verticalScale(10),
  },
  assignmentInnerText: {
    fontFamily: fonts.medium,
    color: color.black,
    fontSize: RFValue(sizes.h5, 667),
    marginLeft: horizontalScale(5),
  },
  assignmentCard: {
    height: verticalScale(60),
    borderBottomWidth: 1,
    marginVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(5),
    justifyContent: 'space-around',
  },
  assignmentCardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  assignmentHeading: {
    fontFamily: fonts.medium,
    color: color.black,
    fontSize: RFValue(sizes.h6, 667),
    fontWeight: '600',
  },
  circle: {
    borderWidth: 1,
    borderColor: color.darkPink,
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  fillCircle: {
    borderWidth: 1,
    backgroundColor: color.darkPink,
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  assignmentStatus: {
    fontFamily: fonts.regular,
    fontSize: RFValue(sizes.h7, 667),
    color: color.black,
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
