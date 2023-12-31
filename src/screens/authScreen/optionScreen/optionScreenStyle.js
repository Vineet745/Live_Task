import { StyleSheet } from "react-native";
import { color, fonts, sizes } from "../../../constants/theme";
import { horizontalScale, verticalScale } from "../../../constants/dimension";
import {RFValue} from "react-native-responsive-fontsize"
export const optionScreenStyle = StyleSheet.create({
    opitonScreenMain:{
        flex:1,
        backgroundColor:color.white,
    },
    logoText:{
    fontFamily:fonts.medium,
    fontSize:RFValue(sizes.h3,667),
    color:color.black,
    },
    optionTopView:{
       minHeight:verticalScale(590),
    },
    optionImage:{
      minHeight:verticalScale(200),
      alignItems:"center",
      justifyContent:"center"
    },
    imageContainer:{
        height:verticalScale(120),
        width:horizontalScale(150),
        alignItems:"center",
        justifyContent:"center"
    },
    registerView:{
     minHeight:verticalScale(125),
     flexDirection:"column",
     alignItems:"center",
     justifyContent:"space-evenly"
    },
    registerViewText:{
         fontFamily:fonts.regular,
         color:color.black,
         fontSize:RFValue(sizes.h6,667)
    },
    registerButton:{
        backgroundColor:color.lightGreen,
        width:horizontalScale(260),
        alignItems:"center",
        justifyContent:"center",
        padding:verticalScale(12),
        borderRadius:30
    },
    registerButtonText:{
        color:color.white,
        fontFamily:fonts.segoeUI,
        fontSize:RFValue(sizes.h5,667)
    },
    loginView:{
        minHeight:verticalScale(125),
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-evenly"
       },
    button:{
        borderWidth:2,
        borderColor:color.lightGreen,
        width:horizontalScale(260),
        alignItems:"center",
        padding:verticalScale(12),
        borderRadius:30
    },
    buttonText:{
        color:color.lightGreen,
        fontFamily:fonts.segoeUI,
        fontSize:RFValue(sizes.h5,667)
    }
})