import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../../constants/dimension';
import {color, fonts, sizes} from '../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';

const SortModal = ({open, closeModal}) => {
  return (
    <Modal transparent={true} animationType="fade" visible={open}>
      <View style={styles.modalBackground}>
        <View style={styles.innerModal}>
          <View style={styles.topView}>
            <Text style={styles.sortText}>Sort</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.clearText}>Clear All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ageView}>
            <Text>Age</Text>
            <View style={styles.ageViewInner}>
              <View>
                <Text>Minimum Age</Text>
                <TextInput></TextInput>
              </View>
              <View>
                <Text>Maximum Age</Text>
                <TextInput></TextInput>
              </View>
            </View>
          </View>
          <View>
            <Text>Subject</Text>
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
    width: horizontalScale(330),
    height: verticalScale(350),
    paddingVertical: verticalScale(10),
    borderRadius: 10,
  },
  topView: {
    borderBottomWidth: 1,
    borderColor: color.grey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(15),
  },
  sortText: {
    fontFamily: fonts.semiBold,
    fontSize: RFValue(sizes.h5, 667),
    color: color.black,
  },
  clearText: {
    color: color.darkPink,
    fontFamily: fonts.semiBold,
    fontSize: RFValue(sizes.h6, 667),
  },
  ageView: {
    borderWidth: 1,
    height: verticalScale(100),
  },
  ageViewInner: {
    flexDirection: 'row',
    alignItems: 'cebter',
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

export default SortModal;
