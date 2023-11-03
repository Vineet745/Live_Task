import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {horizontalScale, verticalScale} from '../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';
import {color, fonts, sizes} from '../../constants/theme';
import CalendarIcon from '../../assets/images/calendar_icon.svg';
import CalendarModal from './CalendarModal';
import {
  getDateWiseChart,
  getInitalChartData,
} from '../../service/api/creditApi';
import {graphFilterData} from '../../redux/slice/graphDataSlice';
import { selectedEndDate, selectedStartDate } from '../../redux/slice/calendarSlice';

const DateModal = ({open, closeModal}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const [years, setYears] = useState([]);
  const [calenderOpen, setCalenderOpen] = useState(false);
  const {startDate, endDate} = useSelector(state => state.calendar);
  const [showStartDate, setShowStartDate] = useState('');
  const [showEndDate, setShowEndDate] = useState();

  // Remove Date function
  useEffect(() => {
    const removeTime = () => {
      if (startDate) {
        const exactDate = startDate.split('T')[0];
        setShowStartDate(exactDate);
      }
    };
    removeTime();
  }, [startDate]);

  useEffect(() => {
    const removeTime = () => {
      if (endDate) {
        const endExactDate = endDate.split('T')[0];
        setShowEndDate(endExactDate);
      }
    };
    removeTime();
  }, [endDate]);

  // Open Modal

  const isOpenCalendar = () => {
    setCalenderOpen(true);
  };

  const isCloseCalendar = () => {
    setCalenderOpen(false);
  };

  // Initial Task

  const handleInitialData = async () => {
    try {
      const {data} = await getInitalChartData();
      dispatch(graphFilterData(data.data));
    } catch (error) {
      console.log('Error fetching tasks: ', error);
    }
  };

  // Get Filter Data

  const handleFilteredData = async () => {
    const selectedData = {
      showStartDate,
      showEndDate,
    };
    try {
      if (showStartDate !== '' || showEndDate !== '') {
        const {data} = await getDateWiseChart(selectedData);
        dispatch(graphFilterData(data.data));
        closeModal();
      } else {
        handleInitialData();
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Clear Selection

  const clearAllSelection = () => {
    setShowStartDate('');
    dispatch(selectedEndDate(null))
    dispatch(selectedStartDate(null))
    setShowEndDate('');
    handleInitialData();
    closeModal();
  };

  return (
    <Modal transparent={true} animationType="fade" visible={open}>
      <CalendarModal open={calenderOpen} closeModal={isCloseCalendar} />
      <View style={styles.modalBackground}>
        <View style={styles.innerModal}>
          <View style={styles.topView}>
            <Text style={styles.sortText}>Sort</Text>
            <TouchableOpacity onPress={clearAllSelection}>
              <Text style={styles.clearText}>Clear All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dateView}>
            <Text style={styles.selectDateHeading}>Select Date</Text>
            <View style={styles.dateInnerView}>
              <View style={styles.startDate}>
                <Text style={styles.startDateText}>Start Date</Text>
                <TouchableOpacity
                  onPress={isOpenCalendar}
                  style={styles.calendarText}>
                  <CalendarIcon />
                  <Text style={styles.dateFormatText}>
                    {showStartDate ? showStartDate : 'DD/MM/YY'}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.startDate}>
                <Text style={styles.startDateText}>End Date</Text>
                <TouchableOpacity style={styles.calendarText}>
                  <CalendarIcon />
                  <Text style={styles.dateFormatText}>
                    {showEndDate ? showEndDate : 'DD/MM/YY'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: verticalScale(10),
                paddingHorizontal:horizontalScale(15),
                borderWidth:1,
                height:verticalScale(100),
                alignItems:"center"
              }}>
              <View>
                <CustomDropdown
                  value={value}
                  setValue={setValue}
                  width={217}
                  text="Month"
                />
              </View>

              <View>
                <CustomDropdown
                  items={years}
                  setItem={setYears}
                  value={value}
                  setValue={setValue}
                  width={107}
                  text="Year"
                />
              </View>
            </View> */}

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={closeModal}
              style={{
                width: '50%',
                height: verticalScale(50),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#dedede',
              }}>
              <Text style={{fontFamily: fonts.medium}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => handleFilteredData()}
              style={{
                width: '50%',
                height: verticalScale(52),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#04c38c',
              }}>
              <Text style={{fontFamily: fonts.semiBold, color: color.white}}>
                Apply
              </Text>
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
    justifyContent: 'flex-end',
  },
  innerModal: {
    backgroundColor: color.white,
    width: '100%',
    height: verticalScale(230),
    paddingVertical: verticalScale(10),
    borderRadius: 1,
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
  dateView: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),
  },
  selectDateHeading: {
    fontFamily: fonts.medium,
    color: color.black,
  },
  dateInnerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: verticalScale(15),
  },
  startDate: {
    borderBottomWidth: 1,
    width: horizontalScale(155),
    height: verticalScale(60),
    justifyContent: 'space-between',
    paddingVertical: verticalScale(5),
  },
  startDateText: {
    fontFamily: fonts.medium,
    color: color.black,
  },
  calendarText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateFormatText: {
    marginLeft: horizontalScale(10),
    fontFamily: fonts.semiBold,
    color: color.black,
  },
});

export default DateModal;
