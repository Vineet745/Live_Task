import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';
import BackButton from '../../../assets/images/back_arrow_button.svg';
import {useNavigation} from '@react-navigation/native';
import {singleAllTaskStyle} from './singleAllTaskStyle';
import {getSingleTask} from '../../../service/api/homeApi';
import ShareIcon from '../../../assets/images/share_icon.svg';
import Loader from '../../../utils/Loader';

const SingleAllTask = ({route}) => {
  const {
    params: {id},
  } = route;
  const [loading, setLoading] = useState(false);
  const [singleData, setSingleData] = useState('');
  // Get single Data

  useEffect(() => {
    handleGetSingleData();
  }, []);

  const handleGetSingleData = async () => {
    const query = {
      id: id,
      flag: 'all',
    };
    try {
      setLoading(true);
      const {data} = await getSingleTask({query});
      setSingleData(data?.data);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };

  const navigation = useNavigation();
  return (
    <View style={singleAllTaskStyle.singleMain}>
      <Loader loading={loading} />
      <View style={singleAllTaskStyle.customHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton width={32} height={32} />
        </TouchableOpacity>
        <TouchableOpacity style={singleAllTaskStyle.shareButton}>
          <Text style={{color: color.white, fontFamily: fonts.semiBold}}>
            {singleData.is_shared ? 'Unshared' : 'Shared'}
          </Text>
          <ShareIcon />
        </TouchableOpacity>
      </View>
      <View style={singleAllTaskStyle.fieldData}>
        <Text style={{fontFamily: fonts.medium, color: color.black}}>
          Task Name
        </Text>
        <Text
          style={{
            fontFamily: fonts.semiBold,
            color: color.black,
            fontSize: RFValue(sizes.h5, 667),
          }}>
          {singleData.show_name}
        </Text>
      </View>

      <View style={singleAllTaskStyle.fieldData}>
        <Text style={{fontFamily: fonts.medium, color: color.black}}>
          Subject
        </Text>
        <Text
          style={{
            fontFamily: fonts.semiBold,
            color: color.black,
            fontSize: RFValue(sizes.h5, 667),
          }}>
          {singleData?.subject?.subject_name}
        </Text>
      </View>

      <View style={singleAllTaskStyle.fieldData}>
        <Text style={{fontFamily: fonts.medium, color: color.black}}>Age</Text>
        <Text
          style={{
            fontFamily: fonts.semiBold,
            color: color.black,
            fontSize: RFValue(sizes.h5, 667),
          }}>
          {singleData.minimum_age} yrs to {singleData.maximum_age} yrs
        </Text>
      </View>

      <View style={singleAllTaskStyle.fieldData}>
        <Text style={{fontFamily: fonts.medium, color: color.black}}>
          Language
        </Text>
        <Text
          style={{
            fontFamily: fonts.semiBold,
            color: color.black,
            fontSize: RFValue(sizes.h5, 667),
          }}>
          {singleData.language}
        </Text>
      </View>

      <View
        style={{
          marginVertical: verticalScale(10),
          paddingLeft: horizontalScale(3),
        }}>
        <Text
          style={{
            fontFamily: fonts.semiBold,
            color: color.black,
            fontSize: RFValue(sizes.h6, 667),
          }}>
          Description
        </Text>
        <Text
          style={{
            marginVertical: verticalScale(10),
            fontFamily: fonts.regular,
            color: color.black,
          }}>
          {singleData.description}
        </Text>
      </View>
    </View>
  );
};

export default SingleAllTask;
