import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {color, fonts} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const editTaskStyle = StyleSheet.create({
  addTaskMain: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),
  },
  inputBoxView: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingVertical: verticalScale(1),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: horizontalScale(10),
    justifyContent: 'space-between',
    backgroundColor: color.lightGrey,
  },
  input: {
    fontFamily: fonts.medium,
    paddingLeft: horizontalScale(10),
    width: '90%',
  },

  errorText: {
    color: 'red',
    fontFamily: fonts.medium,
    marginTop: verticalScale(5),
    fontSize: RFValue(8.5, 667),
  },
  ageView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: verticalScale(10),
  },
  ageInput: {
    width: horizontalScale(130),
    borderWidth: 1,
    height: verticalScale(30),
    borderRadius: 5,
    backgroundColor: '#f3f3f3',
    marginTop: verticalScale(8),
    borderColor: 'grey',
    paddingLeft: horizontalScale(10),
    fontFamily:fonts.medium
  },
  linkView: {
    borderWidth: 1,
    backgroundColor: '#f3f3f3',
    borderColor: 'grey',
    borderRadius: 10,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(5),
    justifyContent: 'space-between',
    marginBottom: verticalScale(20),
  },
  linkTopView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  instructionText: {
    fontFamily: fonts.medium,
    width: '60%',
    height: '80%',
  },
  galleryIcon: {
    height: 25,
    width: 25,
    borderRadius: 25,
    backgroundColor: '#d1d1d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkBottomView: {
    backgroundColor: '#d9d9d9',
    height: verticalScale(30),
    paddingHorizontal: horizontalScale(10),
    borderRadius: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  addLinkText: {
    fontFamily: fonts.medium,
    color: color.black,
    width:"100%"
  },
  dropDownView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  voiceOnlyOptionView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: verticalScale(20),
  },
  voiceOnlyTask: {
    fontFamily: fonts.medium,
    color: '#6e6e6e',
  },
});
