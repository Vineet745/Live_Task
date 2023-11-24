import {Switch} from 'react-native-switch';
import React, {useState} from 'react';
import {toggleButton} from '../../service/api/homeApi';
import { useDispatch, useSelector } from 'react-redux';
import { setIsEnabled } from '../../redux/slice/switchSlice';
import { setIsFetched, setIsTrue } from '../../redux/slice/dataSlice';

export const SwitchButton = ({
  item,
  handleGetTask,
  isEnabled,
  setIsEnabled
}) => {
const dispatch = useDispatch()
// const [isEnabled, setIsEnabled] = useState(item.is_shared)

  const handleToggleButton = async () => {
    if ( isEnabled === false ) {
      const query = {
        task_id: item.id,
        check:true,
      };
      try {
        setIsEnabled(!isEnabled);
       const data =  await toggleButton({query});
       console.log("data",data)
        await handleGetTask();
        dispatch(setIsFetched(true))
      } catch (error) {
        console.log('error', error);
      }
    } else if (item.is_shared === true) {
      const query = {
        task_id: item.id,
        check: !isEnabled,
      };
      try {
        setIsEnabled(!isEnabled);
        dispatch(setIsFetched(false))
        // dispatch(setIsEnabled(!isEnabled))
        await toggleButton({query});
        await handleGetTask();
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  const value = isEnabled===true?isEnabled:item.is_shared

  return (
    <Switch
    
      value={isEnabled}
      onValueChange={handleToggleButton}
      disabled={false}
      circleSize={25}
      barHeight={27}
      circleBorderActiveColor='transparent'
      circleBorderInactiveColor='transparent'
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
