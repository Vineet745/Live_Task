import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {color, fonts, sizes} from '../../constants/theme';
import {horizontalScale, verticalScale} from '../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';
import Modal from 'react-native-modal';
import {deleteClass, getClasses} from '../../service/api/classApi';
import {useNavigation} from '@react-navigation/native';

const DataDeleteModal = ({open, closeModal, id, handleDelete}) => {
  const navigation = useNavigation();
  

  return (
    <Modal
      transparent={true}
      animationType="fade"
      isVisible={open}
      style={styles.modal}
      onBackdropPress={closeModal}>
      <View style={styles.innerModal}>
        <Text style={styles.mainText}>
          Do you Want to Delete this student ?
        </Text>
        <View style={styles.Button}>
          <TouchableOpacity onPress={closeModal} style={styles.cancelButton}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleDelete()}
            style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    margin: 0,
  },
  innerModal: {
    backgroundColor: color.white,
    width: horizontalScale(260),
    height: verticalScale(120),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  mainText: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.h6, 667),
  },
  Button: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  confirmButton: {
    width: horizontalScale(80),
    alignItems: 'center',
    height: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#04c38c',
  },
  cancelButton: {
    width: horizontalScale(80),
    alignItems: 'center',
    height: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#e3e3e3',
  },
  buttonText: {
    fontFamily: fonts.regular,
    color: '#7b7b7b',
  },
  confirmButtonText: {
    fontFamily: fonts.regular,
    color: color.white,
  },
});

export default DataDeleteModal;
