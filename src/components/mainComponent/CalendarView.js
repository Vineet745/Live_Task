import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {color, fonts} from '../../constants/theme';
import {horizontalScale, verticalScale} from '../../constants/dimension';
import {useDispatch} from 'react-redux';
import {
  selectedEndDate,
  selectedStartDate,
} from '../../redux/slice/calendarSlice';

const CalendarView = ({closeModal}) => {
  const dispatch = useDispatch();

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      const dateString = date?.toISOString().slice(0, -5);
      dispatch(selectedEndDate(dateString));
    } else {
      const dateString = date?.toISOString().slice(0, -5);
      dispatch(selectedStartDate(dateString));
    }
  };

  const minDate = new Date(2023, 6, 3);
  const maxDate = new Date();

  return (
    <View style={styles.container}>
      <CalendarPicker
        textStyle={{
          fontFamily: fonts.medium,
          color: color.black,
        }}
        startFromMonday={true}
        allowRangeSelection={true}
        minDate={minDate}
        maxDate={maxDate}
        todayBackgroundColor="#04c38c"
        selectedDayColor="#7300e6"
        selectedDayTextColor="#FFFFFF"
        onDateChange={onDateChange}
      />
      <View style={styles.okButtonContainer}>
        <TouchableOpacity onPress={closeModal} style={styles.okButton}>
          <Text style={styles.okButtonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  okButtonContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: horizontalScale(20),
  },
  okButton: {
    backgroundColor: '#04c38c',
    borderRadius: 8,
    width: horizontalScale(50),
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(10),
  },
  okButtonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: fonts.medium,
  },
});

export default CalendarView;
