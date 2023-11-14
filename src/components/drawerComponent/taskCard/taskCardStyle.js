import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const taskCardStyle = StyleSheet.create({
  dashboardTaskMain: {
    minHeight: verticalScale(159),
    marginVertical: verticalScale(10),
    borderRadius: 5,
    backgroundColor: 'white',
    padding: verticalScale(5),
    elevation: 5,
  },
  topView: {
    padding: verticalScale(6),
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
     minHeight:verticalScale(80)
  },

  lefttopView:{
    flexDirection:"column",
    justifyContent:"space-between",
    height:verticalScale(65)
  },


  taskNameText: {
    fontFamily: fonts.medium,
    color: color.black,
    fontSize: RFValue(15, 667),
  },

  middleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: verticalScale(15),
  },
  yearsText: {
    fontFamily: fonts.regular,
    color: color.black,
    fontSize: RFValue(sizes.h6, 667),
  },
  subjectText: {
    fontFamily: fonts.regular,
    color: color.black,
    fontSize: RFValue(sizes.h6, 667),
  },
  righttopView:{
    flexDirection:"column",
    justifyContent:"space-between",
    height:verticalScale(70)
  },
  languageContainer:{
     backgroundColor:color.darkPink,
     width:horizontalScale(50),
     height:verticalScale(20),
     borderRadius:5,
     alignItems:"center",justifyContent:"center"
  },
  languageText:{
    color:color.white,
    fontFamily:fonts.medium,
    fontSize:RFValue(sizes.h9,667)
  },
  sharedText:{
     fontFamily:fonts.medium,
     fontSize:RFValue(sizes.h9,667),
     color:color.black,
     alignSelf:"center"
  },

  bottomView: {
    minHeight: verticalScale(70),
    justifyContent: 'flex-end',
  },
  bottomViewInnerView: {
    height: verticalScale(40),
    backgroundColor: '#fdcfe1',
  },
  buttonContainer: {
    position: 'absolute',
    top: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  iconTextContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttons: {
    backgroundColor: color.white,
    borderRadius: 22,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  countText: {
    fontFamily: fonts.medium,
    color: color.black,
    letterSpacing: horizontalScale(1),
    fontSize: RFValue(sizes.h7, 667),
  },
});
