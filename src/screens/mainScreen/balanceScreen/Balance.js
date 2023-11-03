import { View, Text } from 'react-native'
import React from 'react'
import { balanceStyle } from './balanceStyle'

const Balance = () => {
  return (
    <View style={balanceStyle.balanceMain}>
      <Text>Balance</Text>
    </View>
  )
}

export default Balance