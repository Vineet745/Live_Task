import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { horizontalScale } from '../constants/dimension';
import { color, fonts } from '../constants/theme';

const CustomCheckBox = ({ selectedItems, setSelectedItems, item }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isItemSelected, setIsItemSelected] = useState(false);

  useEffect(() => {
    if (selectedItems.includes(item.id)) {
      setToggleCheckBox(true);
      setIsItemSelected(true);
    } else {
      setToggleCheckBox(false);
      setIsItemSelected(false);
    }
  }, [selectedItems, item.id]);

  const handleValueChange = newValue => {
    if (newValue) {
      setSelectedItems([...selectedItems, item.id]);
      setIsItemSelected(true);
    } else {
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item.id));
      setIsItemSelected(false);
    }
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={handleValueChange}
      />
      <View style={{ marginLeft: horizontalScale(2) }}>
        <Text style={{ fontFamily: fonts.medium, color: color.black }}>
          {item.item}
        </Text>
      </View>
    </View>
  );
};

export default CustomCheckBox;
