import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {color, fonts, sizes} from '../../constants/theme';
import {horizontalScale, verticalScale} from '../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';
import Coin from '../../assets/images/coin.svg';
import {assignClass} from '../../service/api/assignmentApi';
import {useNavigation} from '@react-navigation/native';
import { selectedCreditAmount } from '../../redux/slice/checkBoxSlice';

const CreditModal = ({open, closeModal, navigation, item,handleSingleAssignmentDetail}) => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const [amount, setAmount] = useState("");
  const {radioSelected} = useSelector(state => state.checkbox);

  // number
  // const numberFromSelected = parseInt(selectedValue[0], 10);

  //   // HandleLogout
  //   const handleLogout = async () => {
  //     try {
  //       await AsyncStorage.removeItem('Token');
  //       dispatch(authToken(''));
  //     } catch (error) {
  //       console.log('Error:', error);
  //     }
  //   };

  // handle Assign Task

  const handleAssignClass = async () => {
    const query = {
      assignmentId: item?.id,
      class_id: radioSelected?.id,
      credit_limit: amount,
    };
    if(query.assignmentId){
      try {
        const data = await assignClass({query});
        closeModal();
        await handleSingleAssignmentDetail() 
        dispatch(selectedRadioButton(null))
        dispatch(selectedCreditAmount(null))
      } catch (error) {
        console.log('error', error);
      }

    }else{
      closeModal()
      dispatch(selectedCreditAmount(amount))
    }
  };

  return (
    <Modal transparent={true} animationType="fade" visible={open}>
      <View style={styles.modalBackground}>
        <View style={styles.innerModal}>
          <Text style={styles.mainText}>Assignment Name</Text>
          <Text style={styles.childText}>
            Assign the Credits for this assignments
          </Text>
          <View style={styles.inputGroup}>
            <Coin />
            <TextInput
              style={{width: '92%'}}
              value={amount}
              placeholder='00'
              onChangeText={val => setAmount(val)}
            />
          </View>
          <View style={styles.Button}>
            <TouchableOpacity onPress={closeModal} style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleAssignClass}
              style={styles.confirmButton}>
              <Text style={styles.buttonText}>Confirm</Text>
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
    width: horizontalScale(280),
    height: verticalScale(170),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    borderRadius: 10,
    // justifyContent: 'space-between',
  },
  mainText: {
    fontFamily: fonts.semiBold,
    color: color.black,
    fontSize: RFValue(sizes.h6, 667),
  },
  inputGroup: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: verticalScale(10),
  },
  childText: {
    fontFamily: fonts.regular,
    color: color.black,
    fontSize: RFValue(sizes.h8, 667),
    marginTop: verticalScale(10),
  },
  Button: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    marginVertical: verticalScale(10),
  },
  confirmButton: {
    width: horizontalScale(100),
    alignItems: 'center',
    height: verticalScale(35),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#04c38c',
  },
  cancelButton: {
    width: horizontalScale(100),
    alignItems: 'center',
    height: verticalScale(35),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#d9d9d9',
  },
  buttonText: {
    fontFamily: fonts.semiBold,
    color: color.white,
  },
  cancelButtonText: {
    fontFamily: fonts.semiBold,
    color: color.grey,
  },
});

export default React.memo(CreditModal);
