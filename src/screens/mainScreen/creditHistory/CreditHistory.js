import { View, Text } from 'react-native'
import React from 'react'
import TransactionTab from '../../../components/mainComponent/creditTransactionTab/CreditTransactionTab'

const CreditHistory = () => {
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
      <TransactionTab/>
    </View>
  )
}

export default CreditHistory