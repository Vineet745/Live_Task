import {Switch} from 'react-native-switch';
import React, {useState} from 'react';
import {toggleButton} from '../../service/api/homeApi';

export const SwitchButton = ({
  item,
  handleGetTask,
  isEnabled,
  setIsEnabled,
}) => {

  const handleToggleButton = async () => {
    if (isEnabled === false) {
      const query = {
        task_id: item.id,
        check: true,
      };
      try {
        setIsEnabled(!isEnabled);
        await toggleButton({query});
        handleGetTask();
      } catch (error) {
        console.log('error', error);
      }
    } else if (isEnabled === true) {
      const query = {
        task_id: item.id,
        check: false,
      };
      try {
        setIsEnabled(!isEnabled);
        await toggleButton({query});
        handleGetTask();
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  return (
    <Switch
      value={isEnabled}
      onValueChange={handleToggleButton}
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
