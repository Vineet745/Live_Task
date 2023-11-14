import {StyleSheet} from 'react-native';
import {color, fonts, sizes} from '../../../constants/theme';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';

export const studentAssignmentDetailStyle = StyleSheet.create({
  studentAssignmentMain: {
    flex: 1,
    backgroundColor: color.white,
    paddingHorizontal: horizontalScale(10),
  },
  studentDetailView: {
    borderBottomWidth: 1,
    marginVertical: verticalScale(5),
    paddingVertical: verticalScale(6),
    minHeight: verticalScale(55),
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(10),
    borderColor: 'grey',
  },

  headerText: {
    fontFamily: fonts.regular,
    fontSize: RFValue(sizes.h6, 667),
    color: '#292929',
  },
  responseText: {
    color:color.black,
    fontFamily: fonts.medium,
    fontSize: RFValue(sizes.h6, 667),
  },
});
