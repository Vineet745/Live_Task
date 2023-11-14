import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {assignClassStyle} from './assignClassStyle';
import SearchIcon from '../../../assets/images/search_icon.svg';
import {color, fonts} from '../../../constants/theme';
import CustomCheckBox from '../../../components/mainComponent/CustomCheckBox';
import {horizontalScale} from '../../../constants/dimension';

const AssignClass = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <View style={assignClassStyle.assingClassMain}>
      <View style={assignClassStyle.assignClassTopView}>
        <Text style={assignClassStyle.selectText}>Select Class</Text>
        <View style={assignClassStyle.inputView}>
          <View style={assignClassStyle.searchTask}>
            <SearchIcon />
            <TextInput
              value={searchText}
              onChangeText={val => setSearchText(val)}
              style={{width: '90%', fontFamily: fonts.semiBold}}
              placeholder="Search Task"
            />
          </View>
        </View>
        <View style={assignClassStyle.classCardView}>
          <Text style={assignClassStyle.classText}>Class Name</Text>
          {/* <CustomCheckBox/> */}
          <View
            style={{
              borderWidth: 1,
              borderColor: color.darkPink,
              width: 20,
              height: 20,
              borderRadius: 50,
            }}></View>
        </View>

        <View style={assignClassStyle.classCardView}>
          <Text style={assignClassStyle.classText}>Class Name</Text>
          {/* <CustomCheckBox/> */}
          <View
            style={{
              borderWidth: 1,
              borderColor: color.darkPink,
              width: 20,
              height: 20,
              borderRadius: 50,
            }}></View>
        </View>
      </View>
      <View style={assignClassStyle.btnGroup}>
        <TouchableOpacity style={assignClassStyle.cancelButton}>
          <Text style={assignClassStyle.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={assignClassStyle.doneButton}>
          <Text style={assignClassStyle.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AssignClass;
