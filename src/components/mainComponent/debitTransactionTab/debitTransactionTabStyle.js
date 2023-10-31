import {StyleSheet} from "react-native"
import { horizontalScale, verticalScale } from "../../../constants/dimension"
import { color, fonts, sizes } from "../../../constants/theme"
import { RFValue } from "react-native-responsive-fontsize"

export const debitTransactionTabStyle = StyleSheet.create({
    transactionTabMain: {
        borderBottomWidth: 1,
        paddingVertical: verticalScale(6),
        borderColor:"#646464"
      },
      transactionTabTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: horizontalScale(15),
        paddingVertical: verticalScale(5),
      },
      transactionTabTopLeft: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: color.darkPink,
        alignItems: 'center',
        justifyContent: 'center',
      },
      middleContainer: {
        marginLeft: horizontalScale(10),
        flexDirection: 'column',
        justifyContent: 'space-between',
      },

      assignmentName: {
        fontFamily: fonts.semiBold,
        color: color.black,
      },
    
      transactionTabTopRight: {
        flexDirection: 'row',
        alignItems: 'center',
        width:horizontalScale(120),
        alignItems:"center",
        justifyContent:"space-between"
      },
      coinCount: {
        fontFamily: fonts.segoeUI,
        color: color.darkPink,
        fontWeight: '600',
        fontSize: RFValue(sizes.h3, 667),
      },
      arrowIcon:{
        width:25,
        height:25,
        borderRadius:50,
        backgroundColor:color.lightGreen,
        alignItems:"center",
        justifyContent:"center"
      },
      timeStamp: {
        paddingHorizontal: horizontalScale(15),
      },
      timeStampText: {
        fontFamily: fonts.segoeUI,
        color: color.black,
        fontSize: RFValue(sizes.h8, 667),
      },
})