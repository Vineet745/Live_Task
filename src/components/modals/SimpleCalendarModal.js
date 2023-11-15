import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {color, fonts, sizes} from '../../constants/theme';
import {horizontalScale, verticalScale} from '../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';
import CalendarView from '../mainComponent/CalendarView';
import SimpleCalendar from '../drawerComponent/StartCalendar';
import Modal from 'react-native-modal';
import StartCalendar from '../drawerComponent/StartCalendar';
import EndDateCalendar from '../drawerComponent/EndCalendar';

const SimpleCalendarModal = ({
  open,
  closeModal,
  navigation,
  startDate,
  endDate,
}) => {

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={open}
      style={styles.modal}
      onBackdropPress={closeModal}>
      <View style={styles.innerModal}>
          <StartCalendar closeModal={closeModal} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    margin: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  innerModal: {
    backgroundColor: color.white,
    paddingVertical: verticalScale(10),
    minHeight: verticalScale(320),
    paddingHorizontal: horizontalScale(10),
    justifyContent: 'space-between',
    width: '100%',
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

export default SimpleCalendarModal;
