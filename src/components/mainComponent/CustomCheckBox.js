import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {horizontalScale} from '../../constants/dimension';
import {color, fonts} from '../../constants/theme';
import {useDispatch, useSelector} from 'react-redux';
import {selectedCheckBox} from '../../redux/slice/checkBoxSlice';
import {RadioButton} from 'react-native-paper';
import RadioGroup from 'react-native-radio-buttons-group';

const CustomCheckBox = ({selectedItems, setSelectedItems, item}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isItemSelected, setIsItemSelected] = useState(false);
  const {selectedValue} = useSelector(state => state.checkbox);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectedCheckBox(selectedItems));
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
      setSelectedItems(
        selectedItems.filter(selectedItem => selectedItem !== item.id),
      );
      setIsItemSelected(false);
    }
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
      {/* <View> */}
      {/* <RadioGroup 
            radioButtons={radioButtons} 
            onPress={handleValueChange}
            selectedId={isItemSelected}
        /> */}
    </View>
  );
};

export default CustomCheckBox;

// import { View, Text } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { RadioButton } from 'react-native-paper';
// import { horizontalScale } from '../../constants/dimension';
// import { color, fonts } from '../../constants/theme';
// import { useDispatch } from 'react-redux';
// import { selectedCheckBox } from '../../redux/slice/checkBoxSlice';

// const CustomCheckBox = ({ selectedItems, setSelectedItems, item }) => {
//   const [isItemSelected, setIsItemSelected] = useState(false);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(selectedCheckBox(selectedItems));
//     setIsItemSelected(selectedItems.includes(item.id));
//   }, [selectedItems, item.id]);

//   const handleValueChange = () => {
//     setSelectedItems([item.id]);
//     setIsItemSelected(true);
//   };

//   return (
//     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//       <RadioButton.Group
//         onValueChange={() => handleValueChange()}
//         value={isItemSelected ? item.id.toString() : ''}
//       >
//         <RadioButton.Item
//           label={item.item}
//           value={item.id.toString()}
//           color={color.darkPink}
//         />
//       </RadioButton.Group>
//     </View>
//   );
// };

// export default CustomCheckBox;
