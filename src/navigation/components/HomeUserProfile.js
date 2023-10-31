import { View, Text } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale } from '../../constants/dimension'
import { color, fonts, sizes } from '../../constants/theme'
import { RFValue } from 'react-native-responsive-fontsize'

const HomeUserProfile = () => {
  return (
    <View style={{paddingHorizontal:horizontalScale(10),paddingBottom:verticalScale(10),backgroundColor:color.white,}}>
       <View style={{borderBottomWidth:1,paddingHorizontal:horizontalScale(5),borderColor:"#646464",paddingVertical:verticalScale(10),flexDirection:"row",alignItems:"center"}}>
        <View style={{height:40,width:40,borderWidth:1,borderRadius:20}}></View>  
        <Text style={{marginLeft:horizontalScale(10),fontFamily:fonts.medium,fontSize:RFValue(sizes.h5,667),color:color.black}}>Welcome back , Maria</Text>
        </View>
      </View>
  )
}

export default HomeUserProfile