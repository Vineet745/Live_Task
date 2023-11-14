import {StyleSheet} from 'react-native';
import { horizontalScale, verticalScale } from '../../../constants/dimension';
import { color, fonts } from '../../../constants/theme';

export const createNewAssignmentStyle = StyleSheet.create({
  assignmentName: {
    backgroundColor: '#f3f3f3',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'space-between',
    borderRadius: 10,
    borderColor: '#c3c3c3',
    marginVertical:verticalScale(10)
  },
  assignmentLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: horizontalScale(5),
  },
  input:{width:"90%",fontFamily:fonts.medium}
  ,

  dateView:{
    height:verticalScale(50),
    alignItems:"flex-start",
    justifyContent:"space-between",
    flexDirection:"column",
    marginVertical:verticalScale(10)
  },
  dateheading:{
    fontFamily:fonts.medium,
    color:color.black
  },

  calendarView:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-start",
    borderBottomWidth:1,
    paddingVertical:verticalScale(10)
  },
  date:{
    fontFamily:fonts.medium,
    marginLeft:horizontalScale(10),
  }
});
