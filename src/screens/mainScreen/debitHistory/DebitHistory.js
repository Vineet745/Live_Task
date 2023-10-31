import { View, Text } from 'react-native'
import React from 'react'
import { color } from '../../../constants/theme'
import DebitTransactionTab from '../../../components/mainComponent/debitTransactionTab/DebitTransactionTab'

const DebitHistory = () => {
  return (
    <View style={{flex:1,backgroundColor:color.white}}>
      <DebitTransactionTab/>
    </View>
  )
}

export default DebitHistory