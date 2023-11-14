import {StyleSheet} from "react-native"
import { color, fonts, sizes } from "../../../constants/theme"
import { horizontalScale, verticalScale } from "../../../constants/dimension"
import { RFValue } from "react-native-responsive-fontsize"

export const reportStyle = StyleSheet.create({
    reportMain:{
        flex:1,
        backgroundColor:color.white,
        paddingHorizontal:horizontalScale(5)
    },
    taskDetail:{
        borderBottomWidth:1,
        minHeight:verticalScale(130),
        paddingVertical:verticalScale(10),
        paddingHorizontal:horizontalScale(20),
        flexDirection:"column",
        justifyContent:"space-around"
    },
    taskName:{
        fontFamily:fonts.medium,
        color:color.black,
        fontSize:RFValue(sizes.h6,667)
    },
    className:{
        fontFamily:fonts.medium,
        color:color.black,
        fontSize:RFValue(sizes.h6,667)

    },
    dateText:{
        fontFamily:fonts.medium,
        color:color.black,
        fontSize:RFValue(sizes.h6,667)

    },
    studentStatusDetail:{
        paddingHorizontal:horizontalScale(10),
        paddingVertical:verticalScale(10)
    }  ,
    studentHeading:{
        fontFamily:fonts.semiBold,
        color:color.black,
        fontSize:RFValue(sizes.h3,667),
        marginLeft:horizontalScale(10)
    },
    studentCard:{
        marginVertical:verticalScale(10),
        paddingVertical:verticalScale(10),
        minHeight:verticalScale(70),
        paddingHorizontal:horizontalScale(10),
        flexDirection:"column",
        justifyContent:"space-between",
        borderWidth:0.3,
        borderColor:"grey",
        borderRadius:10
    },
    studentName:{
        fontFamily:fonts.medium,
        color:color.black,
        fontSize:RFValue(sizes.h5,667)

    }
})