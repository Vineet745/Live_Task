import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import TeacherDashboardTask from '../../../components/mainComponent/teacherDashboardTask.js/TeacherDashboardTask';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import SearchIcon from '../../../assets/images/search_icon.svg';
import Filter from '../../../assets/images/filter_icon.svg';
import {fonts} from '../../../constants/theme';
import {exploreStyle} from './exploreStyle';
import {getHomeTask, searchTask} from '../../../service/api/homeApi';
import {useDispatch} from 'react-redux';
import {viewCount} from '../../../redux/slice/taskCountSlice';
import {useFocusEffect} from '@react-navigation/native';
import SortModal from '../../../components/modals/SortModal';

const Explore = () => {
  const [taskData, setTaskData] = useState([]);
  const [learningData, setLearningData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [open, setOpen] = useState(false);

  // const [searchData, setSearchData] = useState([])

  useFocusEffect(
    useCallback(() => {
        handleGetTask();
    }, []),
  );

  // handleAllTask

  const handleGetTask = async () => {
    try {
      const {data} = await getHomeTask();
      setTaskData(data.data);
    } catch (error) {
      console.log('error');
    }
  };

  // Search Task

  const handleSearchTask = async () => {
    const userData = {
      flag: 'explore',
      searchParam: searchText,
    };
    try {
      const {data} = await searchTask(userData);
      setTaskData(data.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  // Manage

  const handleTextChange = value => {
    setSearchText(value);
    handleSearchTask();
  };


// Open Modal
const openModal = () => {
  setOpen(true);
};

// Close Modal

const closeModal = () => {
  setOpen(false);
};


  return (
    <View style={exploreStyle.exploreMain}>
      <SortModal
        open={open}
        closeModal={closeModal}
      />
      <View style={exploreStyle.inputView}>
        <View style={exploreStyle.searchTask}>
          <SearchIcon />
          <TextInput
            value={searchText}
            onChangeText={handleTextChange}
            style={{width: '84%', fontFamily: fonts.semiBold}}
            placeholder="Search Task"
          />
        </View>
        <TouchableOpacity  onPress={openModal} style={exploreStyle.sortView}>
          <Filter />
          <Text style={{fontFamily: fonts.semiBold}}>Sort</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginVertical: verticalScale(10)}}>
        <FlatList
          style={{
            marginBottom: verticalScale(50),
          }}
          showsVerticalScrollIndicator={false}
          data={taskData}
          renderItem={({item}) => {
            return (
              <TeacherDashboardTask item={item} learingData={learningData} />
            );
          }}
        />
      </View>
    </View>
  );
};

export default Explore;
