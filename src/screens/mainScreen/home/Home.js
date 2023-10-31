import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
      <StatusBar barStyle="dark-content" backgroundColor={"white"}/>
      <View>
        <View>
        </View>
        <Text>Welcome Back, Maria</Text>
      </View>
    </View>
  )
}

export default Home