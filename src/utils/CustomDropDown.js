import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {horizontalScale, verticalScale} from '../constants/dimension';
import {color, fonts} from '../constants/theme';

const CustomDropdown = ({value, setValue}) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Hindi', value: 'hindi'},
    {label: 'French', value: 'french'},
    {label: 'German', value: 'german'},
    {label: 'English', value: 'english'},
  ]);

  return (
    <View>
      <View
        style={{
          flex: 1,
          width: horizontalScale(285),
        }}>
        <DropDownPicker
          style={{
            backgroundColor: color.lightGrey,
            borderWidth: 0,
            borderRadius: 10,
          }}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          textStyle={{fontFamily:fonts.medium}}
          placeholder={
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{fontFamily: fonts.medium}}>Select a Language</Text>
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
