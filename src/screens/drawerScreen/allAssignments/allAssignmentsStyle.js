import { StyleSheet } from "react-native";
import { color, fonts, sizes } from "../../../constants/theme";
import { horizontalScale, verticalScale } from "../../../constants/dimension";
import { RFValue } from "react-native-responsive-fontsize";
import { ScreenStackHeaderRightView } from "react-native-screens";


export const AllAssignmentsStyle = StyleSheet.create({
    allAssignmentsMain:{
        backgroundColor:color.white,
        flex:1,
        paddingVertical:verticalScale(15),
        paddingHorizontal:horizontalScale(15)
    },
    allAssignmentsText:{
        fontFamily:fonts.medium,
        fontSize:RFValue(sizes.h3,667),
        color:color.black,
        fontWeight:"600"
    },
    inputView:{
        marginTop:verticalScale(15),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    searchTask: {
        borderWidth: 1,
        borderColor:"grey",
        width: '73%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: horizontalScale(5),
        justifyContent: 'space-between',
        backgroundColor: '#f3f3f3',
        borderRadius: 5,
        height:verticalScale(36)
      },
      addButton:{
        backgroundColor:"#04c38c",
        width:"25%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        height:verticalScale(36),
        borderRadius:5
      },
      addText:{
        fontFamily:fonts.medium,
        fontSize:RFValue(sizes.h6,667),
        color:color.white,
        
      },
      cardView:{
        marginVertical:verticalScale(10),
        marginBottom:verticalScale(140)
      }
      
})