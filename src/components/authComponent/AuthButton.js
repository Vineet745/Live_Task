import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale } from '../../constants/dimension'
import { color, fonts, sizes } from '../../constants/theme'
import { RFValue } from "react-native-responsive-fontsize"

const AuthButton = ({text,action}) => {
  return (
    <KeyboardAvoidingView>
    <TouchableOpacity  onPress={action}  style={{width:horizontalScale(275),alignItems:"center",alignSelf:"center",paddingVertical:verticalScale(12),borderRadius:30,backgroundColor:color.lightGreen,marginVertical:verticalScale(5)}}>
      <Text style={{color:color.white,fontFamily:fonts.segoeUI,fontSize:RFValue(sizes.h5,667)}}>{text}</Text>
    </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default AuthButton