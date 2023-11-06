import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {classAssignmentStyle} from './classAssignmentStyle';
import PlusIcon from '../../../assets/images/plus_icon.svg';
import SearchIcon from '../../../assets/images/search_icon.svg';
import {fonts} from '../../../constants/theme';
import ClassAssignmentCard from '../../../components/drawerComponent/classAssignmentCard/ClassAssignmentCard';
import {useNavigation} from '@react-navigation/native';

const ClassAssignment = () => {
  const {navigate} = useNavigation();
  const [searchText, setSearchText] = useState(null);
  return (
    <View style={classAssignmentStyle.myStudentMain}>
      <View>
        <View style={classAssignmentStyle.inputView}>
          <View style={classAssignmentStyle.searchTask}>
            <SearchIcon />
            <TextInput
              value={searchText}
              onChangeText={val => setSearchText(val)}
              style={{width: '84%', fontFamily: fonts.semiBold}}
              placeholder="Search Classes"
            />
          </View>
          <TouchableOpacity
            onPress={() => navigate('Add Class')}
            style={classAssignmentStyle.addButton}>
            <Text style={classAssignmentStyle.addText}>Add</Text>
            <PlusIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View style={classAssignmentStyle.cardView}>
        <ClassAssignmentCard />
        <ClassAssignmentCard />
        <ClassAssignmentCard />
        <ClassAssignmentCard />
      </View>
    </View>
  );
};

export default ClassAssignment;
