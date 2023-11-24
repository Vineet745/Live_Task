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
import {myClassesStyle} from './myClassesStyle';
import MyClassCard from '../../../components/drawerComponent/myClassCard/MyClassCard';
import {getClasses} from '../../../service/api/classApi';
import {verticalScale} from '../../../constants/dimension';
import Loader from '../../../utils/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {classFilter} from '../../../redux/slice/filterTaskSlice';

const MyClasses = () => {
  const [searchText, setSearchText] = useState('');
  const [classes, setClasses] = useState([]);
  const [classesFilterData, setclassesFilterData] = useState([]);
  const [loading, setloading] = useState(false);
  const isfocused = useIsFocused();
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  // useFocusEffect(
  //   React.useCallback(() => {
  //     handleGetClasses();
  //   }, []),
  // );

  useEffect(() => {
    handleGetClasses();
  }, [isfocused]);

  const handleGetClasses = async () => {
    try {
      if (!classes.length) {
        setloading(true);
        const {data} = await getClasses();
        setclassesFilterData(data.data);
        setClasses(data.data);
        setloading(false);
      } else {
        const {data} = await getClasses();
        setClasses(data.data);
        setclassesFilterData(data.data);
      }
    } catch (error) {
      console.log('error', error);
      setloading(false);
    }
  };

  const filterTask = searchQuery => {
    const filteredTask = classes.filter(item => {
      return item?.show_name?.toLowerCase().includes(searchQuery.toLowerCase());
    });
    // dispatch(classFilter(filteredTask));
    setclassesFilterData(filteredTask);
  };

  // handleTextChange

  const handleTextChange = value => {
    setSearchText(value);
    if (value === '') {
      setclassesFilterData(classes);
      // dispatch(classFilter(classes));
    } else {
      filterTask(value);
    }
  };

  // const handleNavigate = ()=>{

  // }

  return (
    <View style={myClassesStyle.myStudentMain}>
      <Loader loading={loading} />
      <View>
        <View>
          <Text style={myClassesStyle.studentText}>My Classes</Text>
          <View style={myClassesStyle.inputView}>
            <View style={myClassesStyle.searchTask}>
              <SearchIcon />
              <TextInput
                value={searchText}
                onChangeText={handleTextChange}
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
          {classes.length ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              style={{marginBottom: verticalScale(130)}}
              data={classesFilterData}
              renderItem={({item}) => (
                <MyClassCard item={item} handleGetClasses={handleGetClasses} />
              )}
            />
          ) : (
            <Text
              style={{
                color: color.black,
                fontFamily: fonts.medium,
                alignSelf: 'center',
              }}>
              Classes Not Found
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default MyClasses;
