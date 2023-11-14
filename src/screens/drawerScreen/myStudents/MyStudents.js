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
import {
  filteredData,
  studentFilter,
} from '../../../redux/slice/filterTaskSlice';
import {useDispatch, useSelector} from 'react-redux';

const MyStudents = () => {
  const [searchText, setSearchText] = useState('');
  const [studentData, setStudentData] = useState([]);
  const {navigate} = useNavigation();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {studentFilterData} = useSelector(state => state.filter);

  // handle Get Students

  useFocusEffect(
    React.useCallback(() => {
      handleGetStudent();
    }, []),
  );

  // Get Students

  const handleGetStudent = async () => {
    try {
      setLoading(true);
      const {data} = await getStudents();
      dispatch(studentFilter(data.data));
      setStudentData(data.data);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };

  const filterTask = searchQuery => {
    const filteredTask = studentData.filter(item => {
      return item?.username?.toLowerCase().includes(searchQuery.toLowerCase());
    });
    dispatch(studentFilter(filteredTask));
  };

  // handleTextChange when the text length is null

  const handleTextChange = value => {
    setSearchText(value);
    if (value === '') {
      dispatch(studentFilter(studentData));
    } else {
      filterTask(value);
    }
  };

  return (
    <View style={myStudentStyle.myStudentMain}>
      <Loader loading={loading} />
      <View>
        <View>
          <Text style={myStudentStyle.studentText}>My Students</Text>
          <View style={myStudentStyle.inputView}>
            <View style={myStudentStyle.searchTask}>
              <SearchIcon />
              <TextInput
                value={searchText}
                onChangeText={handleTextChange}
                style={{width: '90%', fontFamily: fonts.semiBold}}
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
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{marginBottom: verticalScale(130)}}
            data={studentFilterData}
            renderItem={({item}) => (
              <StudentCard
                item={item}
                handleGetStudent={handleGetStudent}
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

export default MyStudents;
