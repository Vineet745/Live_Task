import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {singleStudentStyle} from './singleStudentStyle';
import StudentClassCard from '../../../components/drawerComponent/studentClassCard/StudentClassCard';
import Mainbutton from '../../../components/mainComponent/Mainbutton';
import {verticalScale} from '../../../constants/dimension';
import DeleteWhite from '../../../assets/images/white_delete.svg';
import BackButton from '../../../assets/images/back_arrow_button.svg';
import {useNavigation} from '@react-navigation/native';
import ImageEdit from '../../../assets/images/image_edit.svg';
import ClassModal from '../../../components/modals/ClassModal';
import {getStudentClassList} from '../../../service/api/studentApi';
import {color} from '../../../constants/theme';

const SingleStudent = ({route}) => {
  const {
    params: {item},
  } = route;
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    handleGetStudentList();
  }, []);

  // navigation

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Get Student Class List

  const handleGetStudentList = async () => {
    try {
      const {data} = await getStudentClassList({id: item.id});
      setStudentList(data.data?.rows);
    } catch (error) {
      console.log('error', error);
    }
  };



  return (
    <View style={singleStudentStyle.singleStudentMain}>
      <ClassModal closeModal={handleClose} open={open} />
      <View style={singleStudentStyle.singleStudentInner}>
        <View style={singleStudentStyle.singleStudentHeader}>
          <View style={singleStudentStyle.singleStudentLeftView}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                backgroundColor: '#f7f7f7',
                elevation: 1,
              }}>
              <BackButton width={32} height={32} />
            </TouchableOpacity>
            <Text style={singleStudentStyle.detailText}>Details</Text>
          </View>
          <View style={singleStudentStyle.singleStudentRightView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Edit Student',{item:item})}
              style={singleStudentStyle.profileEditButton}>
              <Text style={singleStudentStyle.profileEditText}>Edit</Text>
              <ImageEdit />
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: 'black', borderRadius: 50, padding: 3}}>
              <DeleteWhite />
            </TouchableOpacity>
          </View>
        </View>
        <View style={singleStudentStyle.singleStudentDetails}>
          <View style={singleStudentStyle.studentDetailView}>
            <Text style={singleStudentStyle.studentName}>{item.username}</Text>
          </View>

          <View style={singleStudentStyle.studentDetailView}>
            <Text style={singleStudentStyle.studentName}>{item.email}</Text>
          </View>
          {studentList.length > 0 ? (
            <View>
              <FlatList
                data={studentList}
                renderItem={({item}) => <StudentClassCard item={item} />}
              />
            </View>
          ) : (
            <Text
              style={{
                textAlign: 'center',
                color: color.black,
                marginVertical: verticalScale(20),
              }}>
              No Class Assigned
            </Text>
          )}

          <View style={{marginVertical: verticalScale(10)}}>
            <Mainbutton
              width={270}
              text="Assign to Class"
              action={handleOpen}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SingleStudent;
