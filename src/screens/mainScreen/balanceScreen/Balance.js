import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {balanceStyle} from './balanceStyle';
import Coin from '../../../assets/images/coin.svg';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import DollarSign from '../../../assets/images/dollar_sign.svg';
import { color } from '../../../constants/theme';
const Balance = () => {
  return (
    <View style={balanceStyle.balanceMain}>
      <View style={balanceStyle.balanceTopView}>
        <Text style={balanceStyle.balanceTopViewText}>
          Available Credit balance
        </Text>
        <View style={balanceStyle.amountView}>
          <Coin width={47} height={40} />
          <Text style={balanceStyle.amountText}>1000</Text>
        </View>
      </View>
      <View style={balanceStyle.bottomView}>
        <View style={{minHeight:verticalScale(270)}}>
        <Text style={balanceStyle.refillText}>Refill Your Coins</Text>
        <View style={balanceStyle.inputWrapper}>
          <View style={{paddingLeft: horizontalScale(5)}}>
            <DollarSign />
          </View>
          <TextInput placeholder='Enter Your Amount' placeholderTextColor={color.black} style={balanceStyle.input}></TextInput>
        </View>
        <View style={balanceStyle.informationView}>
          <Text style={balanceStyle.informationText}>You will get 1000 coins for $1.</Text>
        </View>

        </View>
        <View>
        <TouchableOpacity  style={balanceStyle.buyButton}>
          <Text style={balanceStyle.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
        <View style={balanceStyle.notNowWrapper}>
          <TouchableOpacity style={{width:horizontalScale(80)}}>
            <Text style={balanceStyle.notNowText}>Not Now</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
  );
};

export default Balance;
