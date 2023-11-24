import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchIcon from '../../../assets/images/search_icon.svg';
import {color, fonts} from '../../../constants/theme';
import PlusIcon from '../../../assets/images/plus_icon.svg';
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import {AllAssignmentsStyle} from './allAssignmentsStyle';
import AllAssignmentCard from '../../../components/drawerComponent/allAssignmentCard/AllAssignmentCard';
import {getAssignments} from '../../../service/api/assignmentApi';
import {verticalScale} from '../../../constants/dimension';
import Loader from '../../../utils/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {
  assingFilter,
  assingmentFilter,
} from '../../../redux/slice/filterTaskSlice';

const AllAssignments = () => {
  const [searchText, setSearchText] = useState('');
  const [assignmentData, setassignmentData] = useState([]);
  const [assignmentFilterData, setAssignmentFilterData] = useState([]);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const isfocused = useIsFocused();
  // const {assignmentFilterData} = useSelector(state => state.filter);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     handleAssignments();
  //   }, []),
  // );

  useEffect(() => {
    handleAssignments();
  }, [isfocused]);

  // handle Get Assignment

  const handleAssignments = async () => {
    try {
      if (!assignmentData.length) {
        setloading(true);
        const {data} = await getAssignments();
        setAssignmentFilterData(data.data);
        setassignmentData(data?.data);
        setloading(false);
      } else {
        const {data} = await getAssignments();
        setAssignmentFilterData(data.data);
        setassignmentData(data?.data);
      }
    } catch (error) {
      console.log('error', error);
      setloading(false);
    }
  };

  const filterTask = searchQuery => {
    const filteredTask = assignmentData.filter(item => {
      return item?.show_name?.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setAssignmentFilterData(filteredTask);
  };

  // handleTextChange

  const handleTextChange = value => {
    setSearchText(value);
    if (value === '') {
      setAssignmentFilterData(assignmentData);
    } else {
      filterTask(value);
    }
  };

  const {navigate} = useNavigation();
  return (
    <View style={AllAssignmentsStyle.allAssignmentsMain}>
      <Loader loading={loading} />
      <View>
        <View>
          <Text style={AllAssignmentsStyle.allAssignmentsText}>
            All Assignments
          </Text>
          <View style={AllAssignmentsStyle.inputView}>
            <View style={AllAssignmentsStyle.searchTask}>
              <SearchIcon />
              <TextInput
                value={searchText}
                onChangeText={handleTextChange}
                style={{width: '84%', fontFamily: fonts.semiBold}}
                placeholder="Search Classes"
              />
            </View>
            <TouchableOpacity
              onPress={() => navigate('Create New Assignment')}
              style={AllAssignmentsStyle.addButton}>
              <Text style={AllAssignmentsStyle.addText}>Add</Text>
              <PlusIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={AllAssignmentsStyle.cardView}>
          {assignmentData.length?<FlatList
            data={assignmentFilterData}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <AllAssignmentCard
                  item={item}
                  handleAssignments={handleAssignments}
                />
              );
            }}
          />:<Text style={{
            color: color .black,
            fontFamily: fonts.medium,
            alignSelf: 'center',
          }}>Assignment Not found</Text>}
          
        </View>
      </View>
    </View>
  );
};

export default AllAssignments;
