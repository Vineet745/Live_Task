import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {horizontalScale, verticalScale} from '../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';
import {filterTask, getHomeTask, getTasks} from '../../service/api/homeApi';
import {useDispatch} from 'react-redux';
import {filteredData} from '../../redux/slice/filterTaskSlice';
import {color, fonts, sizes} from '../../constants/theme';
import CustomCheckBox from '../mainComponent/CustomCheckBox';

const SortModal = ({open, closeModal}) => {
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState([]);
  const [minimum_age, setminimum_age] = useState(null);
  const [maximum_age, setmaximum_age] = useState(null);

  // Custom Data
  const subjectList = [
    {id: 1, item: 'Hindi'},
    {id: 2, item: 'English'},
    {id: 3, item: 'Science'},
    {id: 4, item: 'Maths'},
    {id: 5, item: 'Sanskrit'},
  ];

  // hometask

  const handleGetTask = async () => {
    try {
      const {data} = await getTasks();
      dispatch(filteredData(data.data));
    } catch (error) {
      console.log('Error fetching tasks: ', error);
    }
  };

  // Clear Selection

  const clearAllSelection = () => {
    setSelectedItems([]);
    setminimum_age('');
    setmaximum_age('');
    handleGetTask();
    closeModal();
  };

  // Extra func
  const closeFunction = () => {
    try {
      closeModal();
    } catch (error) {
      console.log('error', error);
    }
  };
  // filter

  const handleFilterTask = async () => {
    let subjectId = selectedItems.length > 0 ? selectedItems : [];
    subjectId = subjectId.length > 0 ? subjectId : '';
    const query = {
      flag: 'explore',
      searchParam: '',
      minage: minimum_age ? parseInt(minimum_age, 10) : '',
      maxage: maximum_age ? parseInt(maximum_age, 10) : '',
      subjectId: subjectId,
    };
    try {
      if (
        selectedItems.length > 0 ||
        maximum_age !== '' ||
        minimum_age !== ''
      ) {
        const data = await filterTask(query);
        dispatch(filteredData(data.data.data));
        closeModal();
      } else {
        handleGetTask();
        closeModal();
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Modal transparent={true} animationType="fade" visible={open}>
      <View style={styles.modalBackground}>
        <View style={styles.innerModal}>
          <View style={styles.topView}>
            <Text style={styles.sortText}>Sort</Text>
            <TouchableOpacity onPress={clearAllSelection}>
              <Text style={styles.clearText}>Clear All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ageView}>
            <Text style={styles.ageText}>Age</Text>
            <View style={styles.ageViewInner}>
              <View style={styles.minimumAge}>
                <Text
                  style={{
                    fontFamily: fonts.medium,
                    fontSize: RFValue(sizes.h7, 667),
                    color: color.black,
                  }}>
                  Minimum Age
                </Text>
                <TextInput
                  value={minimum_age}
                  onChangeText={val => setminimum_age(val)}
                  style={{
                    borderWidth: 1,
                    borderColor: 'grey',
                    height: verticalScale(30),
                    marginTop: verticalScale(5),
                    borderRadius: 5,
                  }}
                />
              </View>
              <View style={styles.minimumAge}>
                <Text
                  style={{
                    fontFamily: fonts.medium,
                    fontSize: RFValue(sizes.h7, 667),
                    color: color.black,
                  }}>
                  Maximum Age
                </Text>
                <TextInput
                  value={maximum_age}
                  onChangeText={val => setmaximum_age(val)}
                  style={{
                    borderWidth: 1,
                    borderColor: 'grey',
                    height: verticalScale(30),
                    marginTop: verticalScale(5),
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: horizontalScale(10),
              paddingVertical: verticalScale(10),
            }}>
            <Text style={{color: color.black, fontFamily: fonts.semiBold}}>
              Subject
            </Text>
            <View
              style={{
                minHeight: verticalScale(150),
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginTop: verticalScale(10),
              }}>
              <FlatList
                data={subjectList}
                renderItem={({item}) => {
                  return (
                    <CustomCheckBox
                      item={item}
                      selectedItems={selectedItems}
                      setSelectedItems={setSelectedItems}
                    />
                  );
                }}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={closeFunction}
              style={{
                width: horizontalScale(175),
                height: verticalScale(50),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#dedede',
              }}>
              <Text style={{fontFamily: fonts.medium}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => handleFilterTask()}
              style={{
                width: horizontalScale(175),
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
    justifyContent: 'center',
  },
  innerModal: {
    backgroundColor: color.white,
    width: horizontalScale(350),
    height: verticalScale(380),
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
  ageView: {
    borderWidth: 1,
    height: verticalScale(100),
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),
  },
  ageText: {
    fontFamily: fonts.semiBold,
    color: color.black,
  },

  ageViewInner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
    justifyContent: 'space-evenly',
  },

  minimumAge: {
    width: horizontalScale(110),
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
