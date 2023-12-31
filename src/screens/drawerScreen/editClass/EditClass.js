import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import EditBlack from '../../../assets/images/edit_black.svg';
import Mainbutton from '../../../components/mainComponent/Mainbutton';
import {editClassStyle} from './editClassStyle';
import UserLogo from '../../../assets/images/inputUser.svg';
import {useDispatch, useSelector} from 'react-redux';
import StudentSelectedModal from '../../../components/modals/StudentSelectedModal';
import {editClass} from '../../../service/api/classApi';
import {useNavigation} from '@react-navigation/native';
import {selectedCheckBox} from '../../../redux/slice/checkBoxSlice';
import Loader from '../../../utils/Loader';

const EditStudent = ({route}) => {
  const {
    params: {item},
  } = route;
  const {navigate} = useNavigation();
  const {selectedValue} = useSelector(state => state.checkbox);
  const selectedStudentIDs = selectedValue.map(student => student?.student_id); // Filtered Value of the data which i get from the redux;
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(item.show_name);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    dispatch(selectedCheckBox(item?.class_students));
  }, []);

// Selected Student Modal

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // jkkdjfkjdflk

  const handleEditClass = async () => {
    const query = {
      className: inputValue,
      studentIds: selectedStudentIDs,
    };
    try {
      setLoading(true);
      await editClass({id: item.id, query});
      navigate('My Class');
      setLoading(false);
    } catch (error) {
      console.log('error');
      setLoading(false);
    }
  };

  // handle changes in selected students

  return (
    <View style={editClassStyle.editMain}>
      <Loader loading={loading} />
      <StudentSelectedModal
        open={isOpen}
        closeModal={handleClose}
        item={item}
      />
      <View style={editClassStyle.classContainer}>
        <View style={editClassStyle.classTopContainer}>
          <Text style={editClassStyle.classLabelName}>Class Name</Text>
          <TextInput
            style={editClassStyle.input}
            value={inputValue}
            onChangeText={val => setInputValue(val)}
          />
        </View>
        <TouchableOpacity>
          <EditBlack />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={handleOpen}
        style={editClassStyle.assignmentName}>
        <View style={editClassStyle.assignmentLogo}>
          <UserLogo />
        </View>
        <TextInput
          editable={false}
          placeholderTextColor="#878787"
          placeholder="Select Student"
          style={editClassStyle.selectBoxInput}
        />
      </TouchableOpacity>
      <View style={editClassStyle.customError}>
        <Text style={editClassStyle.customErrorText}>
          ({' '}
          {selectedStudentIDs
            ? selectedStudentIDs.length
            : item?.class_students?.length}{' '}
          Student Selected)
        </Text>
      </View>

      <Mainbutton width={280} text="Save" action={handleEditClass} />
    </View>
  );
};

export default EditStudent;
