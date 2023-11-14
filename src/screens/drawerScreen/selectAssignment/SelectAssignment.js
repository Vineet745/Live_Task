import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {singleAssigmentStyle} from '../singleAssignmentDetail/singleeAssignmentStyle';
import {selectAssignmentStyle} from './selectAssignmentStyle';
import SearchIcon from '../../../assets/images/search_icon.svg';
import {color, fonts} from '../../../constants/theme';
import LanguageDropdown from '../../../navigation/components/LanguageDropdown';
const SelectAssignment = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={selectAssignmentStyle.selectAssignmentMain}>
      <View style={selectAssignmentStyle.selectAssignmentTopView}>
        <Text style={selectAssignmentStyle.assignmentText}>
          Select Assignment
        </Text>

        <View style={selectAssignmentStyle.inputView}>
          <View style={selectAssignmentStyle.searchTask}>
            <SearchIcon />
            <TextInput
              value={searchText}
              onChangeText={val => setSearchText(val)}
              style={{width: '84%', fontFamily: fonts.semiBold}}
              placeholder="Search Classes"
            />
          </View>
          <View style={{borderRadius:5,zIndex:1}}>
            <LanguageDropdown text="All" width={100} marginRight={0}  backgroundColor="#f3f3f3" />
          </View>
        </View>

        <View style={selectAssignmentStyle.assignmentCardMain}>
          <Text style={selectAssignmentStyle.assignmentInnerText}>
            Not Assigned
          </Text>
          <View style={selectAssignmentStyle.assignmentCard}>
            <View style={selectAssignmentStyle.assignmentCardTop}>
              <Text style={selectAssignmentStyle.assignmentHeading}>
                Assignment One
              </Text>
              <View style={selectAssignmentStyle.circle}></View>
            </View>
            <View>
              <Text style={selectAssignmentStyle.assignmentStatus}>
                Not Assigned
              </Text>
            </View>
          </View>
          <View style={selectAssignmentStyle.assignmentCard}>
            <View style={selectAssignmentStyle.assignmentCardTop}>
              <Text style={selectAssignmentStyle.assignmentHeading}>
                Assignment One
              </Text>
              <View style={selectAssignmentStyle.circle}></View>
            </View>
            <View>
              <Text style={selectAssignmentStyle.assignmentStatus}>
                Not Assigned
              </Text>
            </View>
          </View>
        </View>

        <View style={selectAssignmentStyle.assignmentCardMain}>
          <Text style={selectAssignmentStyle.assignmentInnerText}>
            Assigned
          </Text>
          <View style={selectAssignmentStyle.assignmentCard}>
            <View style={selectAssignmentStyle.assignmentCardTop}>
              <Text style={selectAssignmentStyle.assignmentHeading}>
                Assignment One
              </Text>
              <View style={selectAssignmentStyle.fillCircle}></View>
            </View>
            <View>
              <Text style={selectAssignmentStyle.assignmentStatus}>
                Class Name
              </Text>
            </View>
          </View>
          <View style={selectAssignmentStyle.assignmentCard}>
            <View style={selectAssignmentStyle.assignmentCardTop}>
              <Text style={selectAssignmentStyle.assignmentHeading}>
                Assignment One
              </Text>
              <View style={selectAssignmentStyle.fillCircle}></View>
            </View>
            <View>
              <Text style={selectAssignmentStyle.assignmentStatus}>
                Class Name
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={selectAssignmentStyle.btnGroup}>
        <TouchableOpacity style={selectAssignmentStyle.cancelButton}>
          <Text style={selectAssignmentStyle.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={selectAssignmentStyle.doneButton}>
          <Text style={selectAssignmentStyle.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectAssignment;
