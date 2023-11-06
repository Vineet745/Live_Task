import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import SearchIcon from '../../../assets/images/search_icon.svg';
import {fonts} from '../../../constants/theme';
import PlusIcon from '../../../assets/images/plus_icon.svg';
import {useNavigation} from '@react-navigation/native';
import {myClassesStyle} from './myClassesStyle';
import MyClassCard from '../../../components/drawerComponent/myClassCard/MyClassCard';

const MyClasses = () => {
  const [searchText, setSearchText] = useState('');

  const {navigate} = useNavigation();
  return (
    <View style={myClassesStyle.myStudentMain}>
      <View>
        <View>
          <Text style={myClassesStyle.studentText}>My Classes</Text>
          <View style={myClassesStyle.inputView}>
            <View style={myClassesStyle.searchTask}>
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
              style={myClassesStyle.addButton}>
              <Text style={myClassesStyle.addText}>Add</Text>
              <PlusIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={myClassesStyle.cardView}>
          <MyClassCard />
          <MyClassCard />
        </View>
      </View>
    </View>
  );
};

export default MyClasses;
