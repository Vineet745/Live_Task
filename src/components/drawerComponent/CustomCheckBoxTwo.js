import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {horizontalScale} from '../../constants/dimension';
import {color, fonts} from '../../constants/theme';
import {useDispatch} from 'react-redux';
import {selectedCheckBox} from '../../redux/slice/checkBoxSlice';

const CustomCheckBoxTwo = ({selectedItems, setSelectedItems, item}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isItemSelected, setIsItemSelected] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectedCheckBox(selectedItems));
    const isSelected = selectedItems.some(
      selectedItem => selectedItem.student_id === item.id,
    );
    setToggleCheckBox(isSelected);
    setIsItemSelected(isSelected);
  }, [selectedItems, item.id]);

  // conso

  const handleValueChange = newValue => {
    if (newValue) {
      setSelectedItems([...selectedItems, {student_id: item.id}]);
      setIsItemSelected(true);
    } else {
      setSelectedItems(
        selectedItems.filter(
          selectedItem => selectedItem.student_id !== item.id,
        ),
      );
      setIsItemSelected(false);
    }
    dispatch(selectedCheckBox(selectedItems));
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <CheckBox
        onCheckColor="darkPink"
        disabled={false}
        value={toggleCheckBox}
        onValueChange={handleValueChange}
      />
      <View style={{marginLeft: horizontalScale(2)}}>
        <Text style={{fontFamily: fonts.medium, color: color.black}}>
          {item.item}
        </Text>
      </View>
    </View>
  );
};

export default CustomCheckBoxTwo;
