import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';
import BackButton from '../../../assets/images/back_arrow_button.svg';
import {useNavigation} from '@react-navigation/native';
import {singleAllTaskStyle} from './singleAllTaskStyle';
import {getSingleTask, toggleButton} from '../../../service/api/homeApi';
import ShareIcon from '../../../assets/images/share_icon.svg';
import Loader from '../../../utils/Loader';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const SingleAllTask = ({route}) => {

  const {
    params: {id,item},
  } = route;
  const [loading, setLoading] = useState(false);
  const [singleData, setSingleData] = useState('');
  const [isEnabled, setIsEnabled] = useState(item.is_shared)
  const navigation = useNavigation();





// Single Assignment

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

  // Toggle Button

  const handleToggleButton = async () => {
    if (isEnabled === false) {
      const query = {
        task_id: item.task_reaction.task_id, 
        check: true,
      };
      try {
        setIsEnabled(!isEnabled);
        await toggleButton({query});
        console.log("done")
      } catch (error) {
        console.log('error', error);
      }
    } else if (isEnabled === true) {
      const query = {
        task_id: item.task_reaction.task_id,
        check: false,
      };
      try {
        setIsEnabled(!isEnabled);
        await toggleButton({query});
        console.log("nod daone")
      } catch (error) {
        console.log('error', error);
      }
    }
  };



  return (
    <View style={singleAllTaskStyle.singleMain}>
      <Loader loading={loading} />
      <View style={singleAllTaskStyle.customHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton width={32} height={32} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleToggleButton} style={singleAllTaskStyle.shareButton}>
          <Text style={{color: color.white, fontFamily: fonts.semiBold}}>
            {isEnabled === true ? 'Unshare' : 'Share'}
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
