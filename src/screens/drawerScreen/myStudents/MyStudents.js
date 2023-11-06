import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {myStudentStyle} from './myStudentsStyle';
import SearchIcon from '../../../assets/images/search_icon.svg';
import {fonts} from '../../../constants/theme';
import PlusIcon from '../../../assets/images/plus_icon.svg';
import StudentCard from '../../../components/drawerComponent/studentCard/StudentCard';
import {useNavigation} from '@react-navigation/native';

const MyStudents = () => {
  const [searchText, setSearchText] = useState('');

  const {navigate} = useNavigation();
  return (
    <View style={myStudentStyle.myStudentMain}>
      <View>
        <View>
          <Text style={myStudentStyle.studentText}>My Students</Text>
          <View style={myStudentStyle.inputView}>
            <View style={myStudentStyle.searchTask}>
              <SearchIcon />
              <TextInput
                value={searchText}
                onChangeText={val => setSearchText(val)}
                style={{width: '84%', fontFamily: fonts.semiBold}}
                placeholder="Search Task"
              />
            </View>
            <TouchableOpacity
              onPress={() => navigate('Add Student')}
              style={myStudentStyle.addButton}>
              <Text style={myStudentStyle.addText}>Add</Text>
              <PlusIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={myStudentStyle.cardView}>
          <StudentCard />
          <StudentCard />
        </View>
      </View>
    </View>
  );
};

export default MyStudents;
