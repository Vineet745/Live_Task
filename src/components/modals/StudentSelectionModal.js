import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { color, fonts, sizes } from '../../constants/theme';
import { verticalScale } from '../../constants/dimension';
import { RFValue } from 'react-native-responsive-fontsize';
import SearchIcon from '../../assets/images/search_icon.svg';
import LanguageDropdown from '../../navigation/components/LanguageDropdown';
import Modal from 'react-native-modal';
import { getStudents } from '../../service/api/studentApi';
import CustomCheckBox from '../mainComponent/CustomCheckBox';
import CustomCheckBoxTwo from '../drawerComponent/MultipleSelectedRadioButton';
import { useSelector } from 'react-redux';
import CustomRadioButton from '../mainComponent/CustomRadioButton';
import MultipleSelectionCheckBox from '../mainComponent/MultipleSelectionRadioButton';

const StudentSelectionModal = ({ open, closeModal }) => {
  const [searchText, setSearchText] = useState('');
  const [studentData, setStudentData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);


console.log("sjkdkrheiuor",selectedItems)


  useEffect(() => {
    handleGetStudent();
  }, []);

  const handleGetStudent = async () => {
    try {
      const { data } = await getStudents();
      setStudentData(data.data);
      
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      isVisible={open}
      onBackdropPress={closeModal}
      style={styles.modal}
    >
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
                  style={{ width: '84%', fontFamily: fonts.semiBold }}
                  placeholder="Search Classes"
                />
              </View>
              <View style={{ borderRadius: 5, zIndex: 1 }}>
                <LanguageDropdown
                  text="All"
                  width={100}
                  marginRight={0}
                  backgroundColor="#f3f3f3"
                />
              </View>
            </View>
          </View>
          <View style={{ height: 450 }}>
            <FlatList
              data={studentData}
              renderItem={({ item }) => {
                return (
                  <View style={styles.innerModalMain}>
                    <View style={styles.innerModalCenterView}>
                      <View style={styles.innerTextView}>
                        <Text style={styles.innerStudentText}>{item.username}</Text>
                      </View>
                      <MultipleSelectionCheckBox
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
            <TouchableOpacity onPress={closeModal} style={styles.confirmButton}>
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
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    justifyContent: 'flex-end',
    margin: 0,
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
    paddingHorizontal: 15,
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
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
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
    paddingHorizontal: 15,
    height: verticalScale(50),
  },

  innerTextView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    justifyContent: 'center',
    backgroundColor: '#04c38c',
  },
  cancelButton: {
    width: '50%',
    alignItems: 'center',
    height: verticalScale(40),
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

export default StudentSelectionModal;
