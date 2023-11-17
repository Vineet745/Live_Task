import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { horizontalScale } from '../../constants/dimension';
import { color, fonts } from '../../constants/theme';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCheckBox } from '../../redux/slice/checkBoxSlice';
import { RadioButton } from 'react-native-paper';
import RadioGroup from 'react-native-radio-buttons-group';

const MultipleSelectionRadioButton = ({ selectedItems, setSelectedItems, item }) => {
  const [isItemSelected, setIsItemSelected] = useState(false);
  const { selectedValue } = useSelector(state => state.checkbox);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectedCheckBox(selectedItems));
    setIsItemSelected(selectedItems.includes(item.id));
  }, [selectedItems, item.id]);

  const handleValueChange = () => {
    if (!isItemSelected) {
      setSelectedItems([...selectedItems, item.id]);
    } else {
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item.id));
    }
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <RadioButton
        status={isItemSelected ? 'checked' : 'unchecked'}
        disabled={false}
        onPress={handleValueChange}
        color="#fb166b"
      />
      <View style={{ marginLeft: horizontalScale(2) }}>
        <Text style={{ fontFamily: fonts.medium, color: color.black }}>
          {item.item}
        </Text>
      </View>
    </View>
  );
};

export default MultipleSelectionRadioButton;
