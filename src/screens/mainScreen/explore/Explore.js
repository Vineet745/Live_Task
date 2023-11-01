// import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
// import React, {useCallback, useEffect, useState} from 'react';
// import TeacherDashboardTask from '../../../components/mainComponent/teacherDashboardTask.js/TeacherDashboardTask';
// import {horizontalScale, verticalScale} from '../../../constants/dimension';
// import SearchIcon from '../../../assets/images/search_icon.svg';
// import Filter from '../../../assets/images/filter_icon.svg';
// import {fonts} from '../../../constants/theme';
// import {exploreStyle} from './exploreStyle';
// import {getHomeTask, searchTask} from '../../../service/api/homeApi';
// import {useDispatch, useSelector} from 'react-redux';
// import {viewCount} from '../../../redux/slice/taskCountSlice';
// import {useFocusEffect} from '@react-navigation/native';
// import SortModal from '../../../components/modals/SortModal';
// import { filteredData } from '../../../redux/slice/filterTaskSlice';

// const Explore = () => {
//   const [taskData, setTaskData] = useState([]);
//   const [learningData, setLearningData] = useState([]);
//   const [searchText, setSearchText] = useState('');
//   const [open, setOpen] = useState(false);
//   const [originalTaskData, setOriginalTaskData] = useState([]);
//   const dispatch = useDispatch()

//   // utilities
//   const {filteredData:{data}} = useSelector(state=>state.filter)
//   console.log("data")

//   useFocusEffect(
//     useCallback(() => {
//       handleGetTask();
//     }, [])
//   );

//   const handleGetTask = async () => {
//     try {
//       const { data } = await getHomeTask();
//       console.log("Data",data.data)
//       dispatch(filteredData(data.data))
//       setOriginalTaskData(data.data);
//     } catch (error) {
//       console.log('Error fetching tasks: ', error);
//     }
//   };

//   const filterTask = (searchQuery) => {
//     const filteredTask = originalTaskData.filter(item => {
//       return item.show_name.toLowerCase().includes(searchQuery.toLowerCase());
//     });
//     dispatch(filteredData(filteredTask))
//     // setTaskData(filteredData);
//   };

//   const handleTextChange = value => {
//     setSearchText(value);
//     if (value === '') {
//       setTaskData(originalTaskData);
//     } else {
//       filterTask(value);
//     }
//   };

//   const openModal = () => {
//     setOpen(true);
//   };

//   const closeModal = () => {
//     setOpen(false);
//   };

//   return (
//     <View style={exploreStyle.exploreMain}>
//       <SortModal open={open} closeModal={closeModal} />
//       <View style={exploreStyle.inputView}>
//         <View style={exploreStyle.searchTask}>
//           <SearchIcon />
//           <TextInput
//             value={searchText}
//             onChangeText={handleTextChange}
//             style={{ width: '84%', fontFamily: fonts.semiBold }}
//             placeholder="Search Task"
//           />
//         </View>
//         <TouchableOpacity onPress={openModal} style={exploreStyle.sortView}>
//           <Filter />
//           <Text style={{ fontFamily: fonts.semiBold }}>Sort</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={{ marginVertical: verticalScale(10) }}>
//         <FlatList
//           style={{
//             marginBottom: verticalScale(50),
//           }}
//           showsVerticalScrollIndicator={false}
//           data={data}
//           renderItem={({ item }) => {
//             return (
//               <TeacherDashboardTask item={item} learningData={learningData} handleGetTask={handleGetTask} />
//             );
//           }}
//         />
//       </View>
//     </View>
//   );
// };

// export default Explore;

import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import TeacherDashboardTask from '../../../components/mainComponent/teacherDashboardTask.js/TeacherDashboardTask';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import SearchIcon from '../../../assets/images/search_icon.svg';
import Filter from '../../../assets/images/filter_icon.svg';
import {fonts} from '../../../constants/theme';
import {exploreStyle} from './exploreStyle';
import {getHomeTask} from '../../../service/api/homeApi';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import SortModal from '../../../components/modals/SortModal';
import {filteredData} from '../../../redux/slice/filterTaskSlice';
import Loader from '../../../utils/Loader';

const Explore = () => {
  const [searchText, setSearchText] = useState('');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const {filteredData: data} = useSelector(state => state.filter);
  const [originalTaskData, setOriginalTaskData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGetTask();
  }, []);

  // Get Task

  const handleGetTask = async () => {
    try {
      const {data} = await getHomeTask();
      dispatch(filteredData(data.data));
      setOriginalTaskData(data.data);
    } catch (error) {
      console.log('Error fetching tasks: ', error);
    }
  };

  // Filter Task

  const filterTask = searchQuery => {
    const filteredTask = originalTaskData.filter(item => {
      return item.show_name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    dispatch(filteredData(filteredTask));
  };

  // handleTextChange

  const handleTextChange = value => {
    setSearchText(value);
    if (value === '') {
      dispatch(filteredData(originalTaskData));
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
          data={data} // Data from the Redux store
          renderItem={({item}) => {
            return (
              <TeacherDashboardTask item={item} handleGetTask={handleGetTask} />
            );
          }}
        />
      </View>
    </View>
  );
};

export default Explore;
