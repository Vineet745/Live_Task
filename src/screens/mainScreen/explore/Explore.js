import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import TeacherDashboardTask from '../../../components/mainComponent/teacherDashboardTask.js/TeacherDashboardTask';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import SearchIcon from '../../../assets/images/search_icon.svg';
import Filter from '../../../assets/images/filter_icon.svg';
import {fonts} from '../../../constants/theme';
import {exploreStyle} from './exploreStyle';
import {getTasks} from '../../../service/api/homeApi';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import SortModal from '../../../components/modals/SortModal';
import {filteredData} from '../../../redux/slice/filterTaskSlice';
import Loader from '../../../utils/Loader';

const Explore = () => {
  const [searchText, setSearchText] = useState('');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const {filteredData: data} = useSelector(state => state.filter);
  const [originalTaskData, setOriginalTaskData] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  const [loading, setLoading] = useState(false);
  const {fetch} = useSelector(state => state.data);
  const isfocused = useIsFocused()
  // useFocusEffect(
  //   React.useCallback(() => {
  //     handleGetTask();
  //   }, []),
  // );

useEffect(() => {
  handleGetTask()
}, [isfocused])




  // Get Task

  const handleGetTask = async () => {
    const flag = 'explore';
    try {
      if(!originalTaskData.length){
        setLoading(true)
        const {data} = await getTasks(flag);
        setOriginalTaskData(data.data);
        setFilteredData(data.data)
        setLoading(false);
      }else{
        const {data} = await getTasks(flag);
        setOriginalTaskData(data.data);
        setFilteredData(data.data)
      }
    } catch (error) {
      console.log('Error fetching tasks: ', error.response.data.message);
      // setLoading(false);
    }
  };

  // Filter Task

  const filterTask = searchQuery => {
    const filteredTask = originalTaskData.filter(item => {
      return item.show_name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredData(filteredTask)
  };

  // handleTextChange

  const handleTextChange = value => {
    setSearchText(value);
    if (value === '') {
      setFilteredData(originalTaskData)
    } else {
      filterTask(value);
    }
  };

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <View style={exploreStyle.exploreMain}>
      <Loader loading={loading} />
      <SortModal open={open} closeModal={closeModal} />
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
        <TouchableOpacity onPress={openModal} style={exploreStyle.sortView}>
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
            data={filteredData}
            renderItem={({item}) => {
              return (
                <TeacherDashboardTask
                  item={item}
                  handleGetTask={handleGetTask}
                />
              );
            }}
          />
      </View>
    </View>
  );
};

export default Explore;
