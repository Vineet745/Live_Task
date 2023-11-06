import { StyleSheet } from "react-native";
import { color, fonts, sizes } from "../../../constants/theme";
import { horizontalScale, verticalScale } from "../../../constants/dimension";
import { RFValue } from "react-native-responsive-fontsize";
import { ScreenStackHeaderRightView } from "react-native-screens";


export const classAssignmentStyle = StyleSheet.create({
    myStudentMain:{
        backgroundColor:color.white,
        flex:1,
        paddingHorizontal:horizontalScale(15)
    },
    studentText:{
        fontFamily:fonts.medium,
        fontSize:RFValue(sizes.h5,667),
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
        width: '70%',
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
        marginVertical:verticalScale(10)
      }
      
})