import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {color, fonts, sizes} from '../../constants/theme';
import {horizontalScale, verticalScale} from '../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';

const SubjectDropdown = ({value, setValue, width,text,marginRight,backgroundColor,items,setItems}) => {
  const [open, setOpen] = useState(false);



  
  return (
    <View
      style={{height:verticalScale(40)}}>
      <View
        style={{
          width: horizontalScale(width),
          marginRight:horizontalScale(marginRight),
          
        }}>
        <DropDownPicker
          style={{
            backgroundColor:backgroundColor,
            borderRadius: 10,
            minHeight:verticalScale(40),
            borderWidth:0,
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
                {text}
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

export default React.memo(SubjectDropdown);
