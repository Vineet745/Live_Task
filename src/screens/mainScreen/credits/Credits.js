import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import Coin from '../../../assets/images/coin.svg';
import {creditStyle} from './creditStyle';
import CustomDropdown from '../../../utils/CustomDropDown';
import Filter from '../../../assets/images/filter_icon.svg';
import {fonts} from '../../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import { CustomBarChart } from '../../../components/CustomBarChart';

const Credits = () => {
  const {navigate} = useNavigation();

  return (
    <ScrollView style={creditStyle.creditMain}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <View style={creditStyle.balanceView}>
        <Text style={creditStyle.balanceViewText}>Available Credit Coins</Text>
        <View style={creditStyle.balanceAmount}>
          <Coin width={31} height={30} />
          <Text style={creditStyle.balanceAmountText}>1000</Text>
        </View>
      </View>
      <View style={creditStyle.filterView}>
        <View style={creditStyle.filterTopView}>
          <CustomDropdown width={237} />
          <View style={creditStyle.sortView}>
            <Filter />
            <Text style={{fontFamily: fonts.semiBold}}>Sort</Text>
          </View>
        </View>
        <View style={creditStyle.taskDropDown}>
        <CustomDropdown width={237} />
        </View>
      </View>
      <View style={creditStyle.graphView}>
        <CustomBarChart/>
      </View>
      <View style={creditStyle.bottonView}>
        <View style={creditStyle.usedCreditView}>
          <Text style={creditStyle.usedCreditViewText}>
            Credit Used in past Seven days
          </Text>
          <View style={creditStyle.usedCoin}>
            <Coin />
            <Text style={creditStyle.spendCoins}>500</Text>
          </View>
        </View>
        <View style={creditStyle.usedCreditView}>
          <CustomDropdown width={237} />
          <View style={creditStyle.usedCoin}>
            <Coin />
            <Text style={creditStyle.spendCoins}>500</Text>
          </View>
        </View>
        <TouchableOpacity style={creditStyle.buyButton}>
          <Text style={creditStyle.buyButtonText}>Buy Credit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('CreditStack', {Screen: 'Transaction'})}
          style={creditStyle.transactionButton}>
          <Text style={creditStyle.transactionButtonText}>
            View Transaction History
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Credits;
