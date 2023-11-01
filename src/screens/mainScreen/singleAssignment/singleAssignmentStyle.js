import {StyleSheet} from "react-native"
import { horizontalScale, verticalScale } from "../../../constants/dimension"
import { color, fonts, sizes } from "../../../constants/theme"
import { RFValue } from "react-native-responsive-fontsize"

export const SingleAssignmentStyle = StyleSheet.create({
    topView:{
        height:verticalScale(120),
        paddingHorizontal:horizontalScale(15),
        marginVertical:verticalScale(15)
    },
    accountView:{
        backgroundColor:color.darkPink,
        height:"100%",
        borderRadius:10,
        padding:verticalScale(12),
        flexDirection:"column",
        justifyContent:"space-around"
    },
    accountHeading:{
        flexDirection:"row",alignItems:"center",justifyContent:"space-between"
        
    },
    accountHeadingText:{
        fontFamily:fonts.semiBold,
        fontSize:RFValue(sizes.h6,667),
        color:color.white
    },
    amountContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    amountText:{
        marginLeft:horizontalScale(10),
        color:color.white,
        fontFamily:fonts.segoeUI,
        fontSize:RFValue(sizes.h3,667),
        fontWeight:"600"
    },
    studentSpendView:{
        paddingHorizontal:horizontalScale(15),
    
    },
    studentSpendText:{
        fontFamily:fonts.medium,
        fontSize:RFValue(sizes.h5,667),
        color:color.black
    }
}) 