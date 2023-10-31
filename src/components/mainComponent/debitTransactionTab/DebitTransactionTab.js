import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {debitTransactionTabStyle} from './debitTransactionTabStyle';
import Coin from '../../../assets/images/coin.svg';
import RightArrowIcon from '../../../assets/images/right_white_arrow.svg';
import DebitAssignIcon from '../../../assets/images/debit_assign_icon.svg';
import { useNavigation } from '@react-navigation/native';

const DebitTransactionTab = () => {
 const {navigate} = useNavigation();

  return (
    <View style={debitTransactionTabStyle.transactionTabMain}>
      <View style={debitTransactionTabStyle.transactionTabTop}>
        <View style={debitTransactionTabStyle.transactionTabTopLeft}>
          <View style={debitTransactionTabStyle.iconContainer}>
            <DebitAssignIcon />
          </View>
          <View style={debitTransactionTabStyle.middleContainer}>
            <Text style={debitTransactionTabStyle.assignmentName}>
              Assignment Name
            </Text>
          </View>
        </View>
        <View style={debitTransactionTabStyle.transactionTabTopRight}>
          <Text style={debitTransactionTabStyle.coinCount}> -100 </Text>
          <Coin width={25} height={24} />
          <TouchableOpacity onPress={()=>navigate("Assignment")} style={debitTransactionTabStyle.arrowIcon}>
            <RightArrowIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View style={debitTransactionTabStyle.timeStamp}>
        <Text style={debitTransactionTabStyle.timeStampText}>6 hours ago</Text>
      </View>
    </View>
  );
};

export default DebitTransactionTab;
