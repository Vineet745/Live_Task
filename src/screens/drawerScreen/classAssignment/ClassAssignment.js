import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {classAssignmentStyle} from './classAssignmentStyle';
import PlusIcon from '../../../assets/images/plus_icon.svg';
import SearchIcon from '../../../assets/images/search_icon.svg';
import {fonts} from '../../../constants/theme';
import ClassAssignmentCard from '../../../components/drawerComponent/classAssignmentCard/ClassAssignmentCard';
import {useNavigation} from '@react-navigation/native';
import {verticalScale} from '../../../constants/dimension';
import {getSingleClass} from '../../../service/api/classApi';
import Loader from '../../../utils/Loader';

const ClassAssignment = ({route}) => {
  const {
    params: {id},
  } = route;
  const {navigate} = useNavigation();
  const [searchText, setSearchText] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    handleGetSingleClass();
  }, []);

  const handleGetSingleClass = async () => {
    try {
      setLoading(true)
      const {data} = await getSingleClass(id);
      setAssignments(data?.data?.class_assignments);
      setLoading(false)
    } catch (error) {
      console.log('error', error);
      setLoading(false)
    }
  };

  return (
    <View style={classAssignmentStyle.myStudentMain}>
      <Loader loading={loading}/>
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
            onPress={() => navigate('Select Assignment')}
            style={classAssignmentStyle.addButton}>
            <Text style={classAssignmentStyle.addText}>Add</Text>
            <PlusIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginBottom: verticalScale(50)}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={assignments}
          renderItem={({item}) => {
            console.log('item', item);
            return <ClassAssignmentCard item={item.assignment} />;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default ClassAssignment;
