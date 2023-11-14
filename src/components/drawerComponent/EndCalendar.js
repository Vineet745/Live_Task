import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectedEndDate,
  selectedStartDate,
} from '../../redux/slice/calendarSlice';
import {Text, TouchableOpacity, View} from 'react-native';
import {horizontalScale, verticalScale} from '../../constants/dimension';

const EndCalendar = ({closeModal}) => {
  const [selected, setSelected] = useState('');
  const dispatch = useDispatch();

  const handleDayPress = day => {
    setSelected(day.dateString);
  };

  const handleOKPress = () => {
        dispatch(selectedEndDate(selected));
        closeModal();
      }

  return (
    <>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: 'orange',
          },
        }}
      />
      <View
        style={{
          alignItems: 'flex-end',
          paddingHorizontal: horizontalScale(10),
        }}>
        <TouchableOpacity
          onPress={handleOKPress}
          style={{
            backgroundColor: 'lightgreen',
            width: horizontalScale(50),
            alignItems: 'center',
            height: verticalScale(30),
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <Text>OK</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default EndCalendar;
