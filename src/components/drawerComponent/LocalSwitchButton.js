import {Switch} from 'react-native-switch';
import React, {useState} from 'react';
import {toggleButton} from '../../service/api/homeApi';
import { useDispatch, useSelector } from 'react-redux';
import { setIsEnabled } from '../../redux/slice/switchSlice';

export const LocalSwitchButton  = ({isEnabled,setIsEnabled}) => {

const handleSwitchButton = ()=>{
    if(isEnabled===false){
        setIsEnabled(true)
    }else{
        setIsEnabled(false)
    }
}

  return (
    <Switch
      value={isEnabled}
      onValueChange={handleSwitchButton}
      disabled={false}
      circleSize={25}
      barHeight={27}
      backgroundActive={'#d6d6d6'}
      backgroundInactive={'#d6d6d6'}
      circleActiveColor={'#30a566'}
      circleInActiveColor={'#646464'}
      innerCircleStyle={{alignItems: 'center', justifyContent: 'center'}}
      renderActiveText={false}
      renderInActiveText={false}
      switchLeftPx={2}
      switchRightPx={2}
      switchWidthMultiplier={2}
      switchBorderRadius={30}
    />
  );
};
