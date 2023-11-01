import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {color, fonts, sizes} from '../../constants/theme';
import {horizontalScale, verticalScale} from '../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';

const LanguageDropdown = ({value, setValue, width}) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Hindi', value: 'hindi'},
    {label: 'French', value: 'french'},
    {label: 'German', value: 'german'},
    {label: 'English', value: 'english'},
  ]);

  return (
    <View
      style={{marginRight: horizontalScale(15), marginTop: verticalScale(8)}}>
      <View
        style={{
          width: horizontalScale(120),
        }}>
        <DropDownPicker
          style={{
            backgroundColor: color.white,
            borderRadius: 10,
          }}
          iconContainerStyle={{
            borderWidth:1,
            backgroundColor:"lightgreen"
          }}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          textStyle={{
            fontFamily: fonts.medium,
            fontSize: RFValue(sizes.h7, 667),
          }}
          placeholder={
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: fonts.medium,
                  fontSize: RFValue(sizes.h7, 667),
                }}>
                Language
              </Text>
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

export default LanguageDropdown;
