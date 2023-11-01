import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState, useRef} from 'react';
import {verificationStyle} from './verificationStyle';
import CustomAuthHeader from '../../../components/authComponent/CustomAuthHeader';
import {useNavigation} from '@react-navigation/native';
import BigRectangle from '../../../assets/images/big-rectangle.svg';
import {otpVerification} from '../../../service/api/authApi';
import Loader from '../../../utils/Loader';
import {toast} from '../../../service/ToastMessage';
import instance from '../../../service/instance';
import Mainbutton from '../../../components/mainComponent/Mainbutton';

const Verification = () => {
  const {navigate} = useNavigation();
  // States
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [inputThree, setInputThree] = useState('');
  const [inputFour, setInputFour] = useState('');
  const [inputFive, setInputFive] = useState('');
  const [loading, setLoading] = useState(false);

// Check Variable

const show = true;

  // Refs
  const pin1Ref = useRef('');
  const pin2Ref = useRef('');
  const pin3Ref = useRef('');
  const pin4Ref = useRef('');
  const pin5Ref = useRef('');

  // handleVerification

  // const userData = {
  //   email: email,
  //   otp: `${inputOne}${inputTwo}${inputThree}${inputFour}${inputFive}`,
  //   role: 'TCH',
  // };
  // const handleVerification = async () => {
  //   try {
  //     setLoading(true)
  //    const data =  await otpVerification({userData});
  //     navigate('Reset Password', {email: email});
  //     setLoading(false)
  //   } catch (error) {
  //     console.log('error', error.response.data.message);
  //     toast({type:"error",text1:error.response.data.message})
  //     setLoading(false)
  //   }
  // };

  const handleVerification = async()=>{
    try {
      navigate("Profile Stack",{screen:"Update Password",params: {show:show}})
    } catch (error) {
      console.log("error",error)
    }
  }

  return (
    <View style={verificationStyle.verificationMain}>
      <Loader loading={loading} />
      <View style={verificationStyle.verificationTopView}>
        <View style={verificationStyle.welcomeMain}>
          <Text style={verificationStyle.welcomePara}>
            A Verification code has sent on your registered email
          </Text>
        </View>
        <View style={verificationStyle.verificationCodeView}>
          <Text style={verificationStyle.verificationCodeText}>
            Enter your 5 digit verification code
          </Text>
          <View style={verificationStyle.inputBoxes}>
            <TextInput
              ref={pin1Ref}
              keyboardType={'number-pad'}
              maxLength={1}
              value={inputOne}
              onChangeText={pin1 => {
                setInputOne(pin1);
                if (pin1 != '') {
                  pin2Ref.current.focus();
                }
              }}
              style={verificationStyle.inputBox}></TextInput>
            <TextInput
              ref={pin2Ref}
              maxLength={1}
              keyboardType={'number-pad'}
              value={inputTwo}
              onChangeText={pin2 => {
                setInputTwo(pin2);
                if (pin2.length >= 1) {
                  pin3Ref.current.focus();
                } else if (pin2.length < 1) {
                  pin1Ref.current.focus();
                }
              }}
              style={verificationStyle.inputBox}></TextInput>
            <TextInput
              ref={pin3Ref}
              maxLength={1}
              keyboardType={'number-pad'}
              value={inputThree}
              onChangeText={pin3 => {
                setInputThree(pin3);
                if (pin3.length >= 1) {
                  pin4Ref.current.focus();
                } else if (pin3.length < 1) {
                  pin2Ref.current.focus();
                }
              }}
              style={verificationStyle.inputBox}></TextInput>
            <TextInput
              ref={pin4Ref}
              maxLength={1}
              keyboardType={'number-pad'}
              value={inputFour}
              onChangeText={pin4 => {
                setInputFour(pin4);
                if (pin4.length >= 1) {
                  pin5Ref.current.focus();
                } else if (pin4.length < 1) {
                  pin3Ref.current.focus();
                }
              }}
              style={verificationStyle.inputBox}></TextInput>
            <TextInput
              ref={pin5Ref}
              maxLength={1}
              keyboardType={'number-pad'}
              value={inputFive}
              onChangeText={pin4 => {
                setInputFive(pin4);
                if (pin4.length >= 1) {
                  pin5Ref.current.focus();
                } else if (pin4.length < 1) {
                  pin4Ref.current.focus();
                }
              }}
              style={verificationStyle.inputBox}></TextInput>
          </View>
        </View>

        <Mainbutton text="Verify" width={153} action={handleVerification}/>
      </View>
      <View>
        <BigRectangle />
      </View>
    </View>
  );
};

export default Verification;
