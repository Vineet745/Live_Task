import {StyleSheet} from "react-native"
import { horizontalScale, verticalScale } from "../../../constants/dimension"

export const singleAllTaskStyle = StyleSheet.create({
singleMain:{
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),
  },
  customHeader:{
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  shareButton:{
        backgroundColor: '#04c38c',
        flexDirection: 'row',
        alignItems: 'center',
        height: verticalScale(32),
        width: horizontalScale(100),
        borderRadius: 5,
        justifyContent: 'space-evenly',
  },
  fieldData:{
    borderBottomWidth: 1,
    height: verticalScale(70),
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingHorizontal: horizontalScale(5),
    marginVertical: verticalScale(5),
  }
})