import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  KeyboardAvoidingViewBase,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {color, fonts, sizes} from '../../constants/theme';
import {horizontalScale, verticalScale} from '../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';
import SearchIcon from '../../assets/images/search_icon.svg';
import Modal from 'react-native-modal';
import CreditModal from './CreditModal';
import {getClasses} from '../../service/api/classApi';
import CustomCheckBox from '../mainComponent/CustomCheckBox';
import {useNavigation} from '@react-navigation/native';

const ClassModal = ({
  open,
  closeModal,
  handleCreditOpen,
  handleCreditClose,
}) => {
  const [searchText, setSearchText] = useState('');
  const [classData, setClassData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const {navigate} = useNavigation();

  useEffect(() => {
    handleGetClasses();
  }, []);

  // handle Classes

  const handleGetClasses = async () => {
    try {
      const {data} = await getClasses();
      setClassData(data.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Modal
      transparent={true}
      animationType="fade"
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
              data={classData}
              renderItem={({item}) => {
                return (
                  <View style={styles.innerModalMain}>
                    <View style={styles.innerModalCenterView}>
                      <View style={styles.innerTextView}>
                        <Text style={styles.innerStudentText}>
                          {item.show_name}
                        </Text>
                      </View>
                      <CustomCheckBox
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
              onPress={handleCreditOpen}
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

export default ClassModal;
