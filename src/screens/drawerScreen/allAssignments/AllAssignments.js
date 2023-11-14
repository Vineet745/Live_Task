import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchIcon from '../../../assets/images/search_icon.svg';
import {fonts} from '../../../constants/theme';
import PlusIcon from '../../../assets/images/plus_icon.svg';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
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
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const {assignmentFilterData} = useSelector(state => state.filter);

  useFocusEffect(
    React.useCallback(() => {
      handleAssignments();
    }, []),
  );

  // handle Get Assignment

  const handleAssignments = async () => {
    try {
      setloading(true);
      const {data} = await getAssignments();
      dispatch(assingmentFilter(data.data));
      setassignmentData(data?.data);
      setloading(false);
    } catch (error) {
      console.log('error', error);
      setloading(false);
    }
  };

  const filterTask = searchQuery => {
    const filteredTask = assignmentData.filter(item => {
      return item?.show_name?.toLowerCase().includes(searchQuery.toLowerCase());
    });
    dispatch(assingmentFilter(filteredTask));
  };

  // handleTextChange

  const handleTextChange = value => {
    setSearchText(value);
    if (value === '') {
      dispatch(assingmentFilter(assignmentData));
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
          <FlatList
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
          />
        </View>
      </View>
    </View>
  );
};

export default AllAssignments;
