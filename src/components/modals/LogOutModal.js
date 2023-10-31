import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {color, fonts, sizes} from '../../constants/theme';
import {horizontalScale, verticalScale} from '../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {authToken} from '../../redux/slice/authSlice';

const LogOutModal = ({open, closeModal, navigation}) => {
  const dispatch = useDispatch();

  // HandleLogout
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('Token');
      dispatch(authToken(''));
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <Modal transparent={true} animationType="fade" visible={open}>
      <View style={styles.modalBackground}>
        <View style={styles.innerModal}>
          <Text style={styles.mainText}>Do you Want to Logout ?</Text>
          <View style={styles.Button}>
            <TouchableOpacity onPress={closeModal} style={styles.cancelButton}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleLogout}
              style={styles.confirmButton}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerModal: {
    backgroundColor: color.white,
    width: horizontalScale(230),
    height: verticalScale(100),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    justifyContent: 'space-between',
  },
  mainText: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.h6, 667),
  },
  Button: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  confirmButton: {
    width: horizontalScale(60),
    alignItems: 'center',
    height: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  cancelButton: {
    width: horizontalScale(60),
    alignItems: 'center',
    height: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: fonts.semiBold,
    color: color.black,
  },
});

export default LogOutModal;
