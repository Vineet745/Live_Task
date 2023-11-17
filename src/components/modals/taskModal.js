import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {color, fonts, sizes} from '../../constants/theme';
import {horizontalScale, verticalScale} from '../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';
import SearchIcon from '../../assets/images/search_icon.svg';
import Modal from 'react-native-modal';
import {getTasks} from '../../service/api/homeApi';
import CustomCheckBox from '../mainComponent/CustomCheckBox';
import {useSelector} from 'react-redux';
import {assignTask} from '../../service/api/assignmentApi';
import CustomRadioButton from '../mainComponent/CustomRadioButton';
import CustomTaskRadioButton from '../mainComponent/CustomTaskRadioButton';

const TaskModal = ({open, closeModal, item,handleSingleAssignmentDetail}) => {
  const [searchText, setSearchText] = useState('');
  const [tasks, setTasks] = useState();
  const [selectedItems, setSelectedItems] = useState(
    item?.task_id ? item?.task_id : '',
  );
  // handleGet Task
  const {radioSelectedTask} = useSelector(state => state.checkbox);




  useEffect(() => {
    handleGetTask();
  }, []);

  const handleGetTask = async () => {
    try {
      const {data} = await getTasks();
      setTasks(data?.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  //  Assing Task

  const handelAssignTask = async () => {
    const query = {
      task_id: radioSelectedTask?.id,
      assignment_id: item?.id,
    };
    try {
     if(item){
       const {data} = await assignTask({query});
       closeModal();
       await handleSingleAssignmentDetail()
     }else{
      closeModal()
     }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      isVisible={open}
      onSwipeComplete={closeModal}
      style={styles.modal}
      onBackdropPress={closeModal}>
      <View style={styles.modalBackground}>
        <View style={styles.innerModal}>
          <View style={styles.innerModalTopView}>
            <Text style={styles.mainText}>Select Students</Text>
            <View style={styles.inputView}>
              <View style={styles.searchTask}>
                <SearchIcon />
                <TextInput
                  value={searchText}
                  onChangeText={val => setSearchText(val)}
                  style={{width: '90%', fontFamily: fonts.semiBold}}
                  placeholder="Search Classes"
                />
              </View>
            </View>
          </View>
          <View style={{height: 450}}>
            <FlatList
              data={tasks}
              renderItem={({item}) => {
                return (
                  <View style={styles.innerModalMain}>
                    <View style={styles.innerModalCenterView}>
                      <View style={styles.innerTextView}>
                        <Text style={styles.innerStudentText}>
                          {item.show_name.slice(0,25)}
                        </Text>
                      </View>
                      <CustomTaskRadioButton
                        item={item}
                        selectedItems={selectedItems}
                        setSelectedItems={setSelectedItems}
                      />
                    </View>
                  </View>
                );
              }}
            />
          </View>
          <View style={styles.Button}>
            <TouchableOpacity onPress={closeModal} style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handelAssignTask}
              style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    margin: 0,
    justifyContent: 'flex-end',
  },
  innerModal: {
    backgroundColor: '#f3f3f3',
    width: '100%',
    height: verticalScale(520),
    paddingTop: verticalScale(15),
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  innerModalTopView: {
    paddingHorizontal: horizontalScale(15),
  },

  inputView: {
    marginTop: verticalScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchTask: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: horizontalScale(5),
    justifyContent: 'space-between',
    backgroundColor: '#f3f3f3',
    borderRadius: 5,
    height: verticalScale(36),
  },
  innerModalMain: {
    marginVertical: verticalScale(3),
  },
  innerModalCenterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(15),
    height: verticalScale(30),
  },

  innerStudentText: {
    fontFamily: fonts.regular,
    color: color.black,
    fontSize: RFValue(sizes.h7, 667),
  },
  innerAgeText: {
    fontFamily: fonts.regular,
    color: color.black,
    fontSize: RFValue(sizes.h7, 667),
  },
  mainText: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.h6, 667),
  },

  circle: {
    width: 20,
    height: 20,
    borderColor: color.darkPink,
    borderWidth: 1,
    borderRadius: 10,
  },

  Button: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  confirmButton: {
    width: '50%',
    alignItems: 'center',
    height: verticalScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#04c38c',
  },
  cancelButton: {
    width: '50%',
    alignItems: 'center',
    height: verticalScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3e3e3',
  },
  buttonText: {
    fontFamily: fonts.medium,
    color: '#7b7b7b',
  },
  confirmButtonText: {
    fontFamily: fonts.medium,
    color: color.white,
  },
});

export default TaskModal;
