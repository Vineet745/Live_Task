import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {classStudent} from './ClassStudentStyle';
import SearchIcon from '../../../assets/images/search_icon.svg';
import {fonts} from '../../../constants/theme';
import PlusIcon from '../../../assets/images/plus_icon.svg';
import StudentProgressCard from '../../../components/drawerComponent/studentProgressCard/StudentProgressCards';
import StudentSelectionModal from '../../../components/modals/StudentSelectionModal';
import {addClassStudent, getSingleClass} from '../../../service/api/classApi';
import {verticalScale} from '../../../constants/dimension';
import Loader from '../../../utils/Loader';
import StudentSelectedModal from '../../../components/modals/StudentSelectedModal';
import {useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

const ClassStudent = ({route}) => {
  const {
    params: {id, item},
  } = route;
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [classStudents, setClassStudents] = useState([]);
  const [loading, setloading] = useState(false);

  const {selectedValue} = useSelector(state => state.checkbox);
  const selectedStudentIDs = selectedValue.map(student => student?.student_id); // Filtered Value of the data which i get from the redux;

  useFocusEffect(
    React.useCallback(() => {
      handleGetSingleClass();
    }, []),
  );

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Classes

  const handleGetSingleClass = async () => {
    setloading(true);
    try {
      const {data} = await getSingleClass(id);
      setClassStudents(data?.data?.class_students);
      setloading(false);
    } catch (error) {
      console.log('error', error);
      setloading(false);
    }
  };

  // Add Class

  const handleAddClass = async () => {
    const query = {
      classId: item.id,
      studentIds: selectedStudentIDs,
    };
    try {
      const data = await addClassStudent({query});
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={classStudent.classStudentMain}>
      <StudentSelectedModal
        closeModal={handleClose}
        open={isOpen}
        item={item}
        handleAddClass={handleAddClass}
        handleGetSingleClass={handleGetSingleClass}
      />
      <Loader loading={loading} />
      <View>
        <View style={classStudent.inputView}>
          <View style={classStudent.searchTask}>
            <SearchIcon />
            <TextInput
              value={searchText}
              onChangeText={val => setSearchText(val)}
              style={{width: '84%', fontFamily: fonts.semiBold}}
              placeholder="Search Classes"
            />
          </View>
          <TouchableOpacity onPress={handleOpen} style={classStudent.addButton}>
            <Text style={classStudent.addText}>Add</Text>
            <PlusIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginBottom: verticalScale(50)}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={classStudents}
          renderItem={({item}) => {
            // const classId = item.class_id
            return (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={item.students}
                renderItem={({item}) => {
                  return (
                    <StudentProgressCard
                      item={item}
                      id={id}
                      handleGetSingleClass={handleGetSingleClass}
                    />
                  );
                }}
                keyExtractor={(innerItem, index) => index.toString()}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default ClassStudent;
