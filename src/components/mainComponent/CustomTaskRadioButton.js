import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {horizontalScale} from '../../constants/dimension';
import {color, fonts} from '../../constants/theme';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectedCheckBox,
  selectedRadioButton,
  selectedRadioTask,
} from '../../redux/slice/checkBoxSlice';
import {RadioButton} from 'react-native-paper';

const CustomTaskRadioButton = ({selectedItems, setSelectedItems, item}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isItemSelected, setIsItemSelected] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(selectedRadioTask(selectedItems));
    if (selectedItems?.id === item?.id || selectedItems === item?.id) {
      setToggleCheckBox(true);
      setIsItemSelected(true);
    } else {
      setToggleCheckBox(false);
      setIsItemSelected(false);
    }
  }, [selectedItems, item.id]);

  const handleValueChange = newValue => {
    if (newValue) {
      setSelectedItems({id:item?.id, showName: item?.show_name});
      setIsItemSelected(true);
    } else {
      setSelectedItems(selectedItems === item?.task_reaction?.task_id);
      setIsItemSelected(false);
    }
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <RadioButton
        status={isItemSelected ? 'checked' : 'unchecked'}
        disabled={false}
        value={toggleCheckBox}
        onPress={handleValueChange}
        color="#fb166b"
      />
      <View style={{marginLeft: horizontalScale(2)}}>
        <Text style={{fontFamily: fonts.medium, color: color.black}}>
          {item.item}
        </Text>
      </View>
    </View>
  );
};

export default CustomTaskRadioButton;
