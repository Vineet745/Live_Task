import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import AppStack from './src/navigation/Appstack';
import Toast from 'react-native-toast-message';

const App = () => {

  return (
    <View style={{flex: 1}}>
      <AppStack />
      <Toast />
    </View>
  );
};

export default App;
