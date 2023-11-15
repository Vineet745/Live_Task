import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FLatList,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {myStudentStyle} from './myStudentsStyle';
import SearchIcon from '../../../assets/images/search_icon.svg';
import {fonts} from '../../../constants/theme';
import PlusIcon from '../../../assets/images/plus_icon.svg';
import StudentCard from '../../../components/drawerComponent/studentCard/StudentCard';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {GetStudents, getStudents} from '../../../service/api/studentApi';
import {verticalScale} from '../../../constants/dimension';
import Loader from '../../../utils/Loader';
import { allTaskStyle } from './allTasksStyle';
import TaskCard from '../../../components/drawerComponent/taskCard/TaskCard';
import { getAllTasks } from '../../../service/api/taskApi';
import { getTasks } from '../../../service/api/homeApi';
import { useDispatch, useSelector } from 'react-redux';
import { taskFilter } from '../../../redux/slice/filterTaskSlice';

const AllTasks = () => {
  const [searchText, setSearchText] = useState('');
  const [allTask, setAllTask] = useState([]);
  const {navigate} = useNavigation();
  const [loading, setLoading] = useState(false);
const dispatch = useDispatch()
const {filteredTaskData} = useSelector(state=>state.filter)
  // handle Get Students

  useFocusEffect(
    React.useCallback(() => {
      handleGetTask();
    }, []),
  );

  
  // handle Tasks


  const handleGetTask = async()=>{
    const flag = "all";
   try {
    setLoading(true)
      const {data} = await getTasks(flag)
      dispatch(taskFilter(data.data))
      setAllTask(data?.data)
      setLoading(false)
   } catch (error) {
     console.log("error",error)
     setLoading(false)
   }
  }

  const filterTask = searchQuery => {
    const filteredTask = allTask.filter(item => {
      return item?.show_name?.toLowerCase().includes(searchQuery.toLowerCase());
    });
    dispatch(taskFilter(filteredTask));
  };

  // handleTextChange

  const handleTextChange = value => {
    setSearchText(value);
    if (value === '') {
      dispatch(taskFilter(allTask));
    } else {
      filterTask(value);
    }
  };





  return (
    <View style={allTaskStyle.allTaskMain}>
      <Loader loading={loading} />
      <View>
        <View>
          <Text style={allTaskStyle.allTaskText}>All Tasks</Text>
          <View style={allTaskStyle.inputView}>
            <View style={allTaskStyle.searchTask}>
              <SearchIcon />
              <TextInput
                value={searchText}
                onChangeText={handleTextChange}
                style={{width: '84%', fontFamily: fonts.semiBold}}
                placeholder="Search Assignment" 
              />
            </View>
            <TouchableOpacity
              onPress={() => navigate('add Task')}
              style={allTaskStyle.addButton}>
              <Text style={allTaskStyle.addText}>Add</Text>
              <PlusIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={allTaskStyle.cardView}>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{marginBottom: verticalScale(130)}}
            data={filteredTaskData}
            renderItem={({item}) => (
              <TaskCard
                item={item}
                handleGetTask={handleGetTask}
                // ListFooterComponent = {renderLoader}
                // onEndReached = {loadMoreItems}
                // onEndReachedThreshold={0.3}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default AllTasks;
