import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {horizontalScale} from '../constants/dimension';
import {color, fonts} from '../constants/theme';

export const CustomDropDown = ({value, width, setValue, text}) => {
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Pear', value: 'pear'},
  ]);
  const [open, setOpen] = useState(false);

  return (
    <View style={{flex: 1}}>
      <View>
        <DropDownPicker
          style={{
            borderWidth: 0,
            backgroundColor: '#f3f3f3',
            width: horizontalScale(width),
          }}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={text}
          placeholderStyle={{fontFamily: fonts.medium, color: color.grey}}
          textStyle={{fontFamily: fonts.medium}}
        />
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}></View>
    </View>
  );
};
