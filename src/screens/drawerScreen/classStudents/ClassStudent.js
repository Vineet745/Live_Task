import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {classStudent} from './ClassStudentStyle';
import SearchIcon from '../../../assets/images/search_icon.svg';
import {fonts} from '../../../constants/theme';
import PlusIcon from '../../../assets/images/plus_icon.svg';
import StudentProgressCard from '../../../components/drawerComponent/studentProgressCard/StudentProgressCards';

const ClassStudent = () => {
  const [searchText, setSearchText] = useState(null);

  return (
    <View style={classStudent.classStudentMain}>
      <View>
        <View style={classStudent.inputView}>
          <View style={classStudent.searchTask}>
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
            style={classStudent.addButton}>
            <Text style={classStudent.addText}>Add</Text>
            <PlusIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View style={classStudent.cardView}>
        <StudentProgressCard />
      </View>
    </View>
  );
};

export default ClassStudent;
