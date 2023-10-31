import {View, Text} from 'react-native';
import React from 'react';
import Coin from '../../../assets/images/coin.svg';
import ReturnIcon from '../../../assets/images/return_icon.svg';
import {creditTransactionTabStyle} from './creditTransactionTabStyle';
const TransactionTab = () => {
  return (
    <View style={creditTransactionTabStyle.transactionTabMain}>
      <View style={creditTransactionTabStyle.transactionTabTop}>
        <View style={creditTransactionTabStyle.transactionTabTopLeft}>
          <View style={creditTransactionTabStyle.iconContainer}>
            <ReturnIcon />
          </View>
          <View style={creditTransactionTabStyle.middleContainer}>
            <Text style={creditTransactionTabStyle.statusText}>Refund</Text>
            <Text style={creditTransactionTabStyle.assignmentName}>
              Assignment Name
            </Text>
          </View>
        </View>
        <View style={creditTransactionTabStyle.transactionTabTopRight}>
          <Text style={creditTransactionTabStyle.coinCount}> +100 </Text>
          <Coin width={25} height={24} />
        </View>
      </View>
      <View style={creditTransactionTabStyle.timeStamp}>
        <Text style={creditTransactionTabStyle.timeStampText}>6 hours ago</Text>
      </View>
    </View>
  );
};

export default TransactionTab;
