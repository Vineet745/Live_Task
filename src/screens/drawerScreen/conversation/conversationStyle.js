import {StyleSheet} from 'react-native';
import {color, fonts, sizes} from '../../../constants/theme';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import { RFValue } from 'react-native-responsive-fontsize';

export const conversationStyle = StyleSheet.create({
  conversationMain: {
    flex: 1,
    backgroundColor: color.white,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
  },
  promptMessage: {
    alignSelf: 'flex-end',
    maxWidth: horizontalScale(250),
    minHeight: verticalScale(40),
    borderRadius: 10,
    paddingHorizontal: horizontalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(8),
    backgroundColor:"#f4f4f4",
  },
  promptText: {
    color: color.black,
    fontFamily: fonts.regular,
    
  },
  responseMessage: {
    alignSelf: 'flex-start',
    maxWidth: horizontalScale(250),
    minHeight: verticalScale(40),
    borderRadius: 10,
    paddingHorizontal: horizontalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(8),
    paddingVertical: verticalScale(10),
    backgroundColor:"#ffdeea"
  },
  responseText:{
    color: color.black,
    fontFamily: fonts.regular,
    fontSize:RFValue(sizes.h7,667)
  },
  inputView:{
    marginBottom:verticalScale(20),
    borderColor:"grey",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  input:{
    borderWidth:1,
    width:"80%",
    borderRadius:30,
    paddingHorizontal:horizontalScale(15),
    color:color.black,
    fontFamily:fonts.medium
},
sendButton:{
    height:verticalScale(38),
    width:"17%",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    backgroundColor:"#02c6f6"
  },
  sendText:{
    fontFamily:fonts.medium,
    color:color.white
  }
});
