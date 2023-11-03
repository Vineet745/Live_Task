import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {horizontalScale, verticalScale} from '../constants/dimension';
import {color, fonts} from '../constants/theme';
import { languageArray } from './CustomArray';

const CustomDropdown = ({value, setValue, width,text}) => {


  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(languageArray);

  return (
    <View>
      <View
        style={{
          flex: 1,
          width: horizontalScale(width),
        }}>
        <DropDownPicker
          style={{
            backgroundColor: color.lightGrey,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#c0c0c0',
          }}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          textStyle={{fontFamily: fonts.medium}}
          placeholder={
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{fontFamily: fonts.medium}}>{text}</Text>
            </View>
          }
          listItemLabelStyle={{
            fontFamily: fonts.medium,
          }}
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

export default CustomDropdown;
