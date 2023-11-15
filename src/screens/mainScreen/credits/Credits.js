import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Coin from '../../../assets/images/coin.svg';
import {creditStyle} from './creditStyle';
import Filter from '../../../assets/images/filter_icon.svg';
import {fonts} from '../../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {CustomBarChart} from '../../../components/CustomBarChart';
import {getInitalChartData} from '../../../service/api/creditApi';
import DateModal from '../../../components/modals/DateModal';
import {useDispatch, useSelector} from 'react-redux';
import graphDataSlice, {
  graphFilterData,
} from '../../../redux/slice/graphDataSlice';
import { CustomDropDown } from '../../../utils/CustomDropDown';

const Credits = () => {
  const {navigate} = useNavigation();
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const {graphData} = useSelector(state => state.graph);
  const dispatch = useDispatch();




  // open Modal
  const openModal = () => {
    setOpen(true);
  };

  // close Modal

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    handleGetChart();
  }, []);

  // handleGetInitial Chart

  const handleGetChart = async () => {
    try {
      const {data} = await getInitalChartData();
      dispatch(graphFilterData(data.data));
    } catch (error) {
      console.log('error', error);
    }
  };

  // Get total of the week

  const total = graphData.reduce((acc, item) => acc + item.credits, 0);

  return (
    <ScrollView style={creditStyle.creditMain}>
      <DateModal open={open} closeModal={closeModal} />
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
          <CustomDropDown text="Class" value={value} setValue={setValue} width={237} />
          <TouchableOpacity onPress={openModal} style={creditStyle.sortView}>
            <Filter />
            <Text style={{fontFamily: fonts.semiBold}}>Sort</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={creditStyle.graphView}>
        <Text style={creditStyle.graphCreditText}>Per day Credit Uses</Text>
        <CustomBarChart weekChart={graphData} />
      </View>
      <View style={creditStyle.bottonView}>
        <View style={creditStyle.usedCreditView}>
          <Text style={creditStyle.usedCreditViewText}>
            Credit Used in past Seven days
          </Text>
          <View style={creditStyle.usedCoin}>
            <Coin />
            <Text style={creditStyle.spendCoins}>{total}</Text>
          </View>
        </View>
        {/* <View style={creditStyle.usedCreditView}>
          <CustomDropdown width={237} />
          <View style={creditStyle.usedCoin}>
            <Coin />
            <Text style={creditStyle.spendCoins}>500</Text>
          </View>
        </View> */}
        <TouchableOpacity onPress={() => navigate("Balance")}  style={creditStyle.buyButton}>
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
