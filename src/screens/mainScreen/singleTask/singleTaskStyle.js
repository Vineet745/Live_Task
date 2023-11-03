import {StyleSheet} from "react-native"
import { horizontalScale, verticalScale } from "../../../constants/dimension"

export const singleTaskStyle = StyleSheet.create({
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
  remixButton:{
        backgroundColor: '#04c38c',
        flexDirection: 'row',
        alignItems: 'center',
        height: verticalScale(35),
        width: horizontalScale(80),
        borderRadius: 5,
        justifyContent: 'space-evenly',
  }
})