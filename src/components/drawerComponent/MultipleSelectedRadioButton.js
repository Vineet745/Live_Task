import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { horizontalScale } from '../../constants/dimension';
import { color, fonts } from '../../constants/theme';
import { useDispatch } from 'react-redux';
import { selectedCheckBox } from '../../redux/slice/checkBoxSlice';
import { RadioButton } from 'react-native-paper';

const MultipleSelectedRadioButton = ({ selectedItems, setSelectedItems, item }) => {
  const [isItemSelected, setIsItemSelected] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectedCheckBox(selectedItems));
    setIsItemSelected(selectedItems.some(selectedItem => selectedItem.student_id === item.id));
  }, [selectedItems, item.id]);

  const handleValueChange = () => {
    if (!isItemSelected) {
      setSelectedItems([...selectedItems, { student_id: item.id }]);
    } else {
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem.student_id !== item.id));
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

export default MultipleSelectedRadioButton;
